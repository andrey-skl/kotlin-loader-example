package react

import kotlinx.html.Entities
import kotlinx.html.Tag
import kotlinx.html.TagConsumer
import kotlinx.html.Unsafe
import org.w3c.dom.events.Event
import runtime.toPlainObject

class ReactElementBuilder(outerContext: ReactElementBuilder? = null) : TagConsumer<ReactElement> {
    data class Node(val component: dynamic, var children: dynamic, val props: dynamic)

    private val path = mutableListOf<Node>()
    private var lastLeaved: ReactElement? = null
    private var lastNode: ReactElementBuilder.Node? = null
    private val context = mutableMapOf<String, Any?>()

    init {
        outerContext?.let {
            context.putAll(it.context)
        }
    }

    private fun currentNode(): Node = path.last()

    var key: String
        get() {
            return currentNode().props["key"] ?: ""
        }

        set(value) {
            currentNode().props["key"] = value
        }

    private var className: String
        get() {
            return currentNode().props["className"] ?: ""
        }
        set(value) {
            currentNode().props["className"] = value
        }

    fun addClass(name: String) {
        if (className.isEmpty()) {
            className = name
        }
        else {
            className += " $name"
        }
    }

    fun appendChild(child: dynamic) {
        if (path.isEmpty()) throw IllegalStateException("No current DOM node")
        val node = currentNode()
        val children = node.children
        if (children is Array<*>) {
            children.push(child)
        } else if (children === undefined) {
            node.children = child
        } else {
            node.children = arrayOf(children, child)
        }
    }

    override fun finalize(): ReactElement {
        return lastLeaved ?: throw IllegalStateException("No tags were emitted")
    }

    fun lastNode(): Node = lastNode ?: error("No tags were emitted")

    override fun onTagAttributeChange(tag: Tag, attribute: String, value: String?) {
        val node = currentNode()
        if (value == null) {
            js("delete node.props[value]")
        } else {
            node.props[fixAttributeName(attribute)] = value
        }
    }

    operator fun String.unaryPlus() {
        onTagContent(this)
    }

    override fun onTagContent(content: CharSequence) = appendChild(content)
    override fun onTagContentEntity(entity: Entities) = appendChild(entity.text)
    override fun onTagContentUnsafe(block: Unsafe.() -> Unit) {
        val sb = StringBuilder()
        object : Unsafe {
            override fun String.unaryPlus() {
                sb.append(this)
            }
        }.block()
        val node = currentNode()

        node.props["dangerouslySetInnerHTML"] = object {
            @Suppress("unused")
            val __html = sb.toString()
        }
    }

    override fun onTagStart(tag: Tag) {
        val element = Node(tag.tagName, undefined, js("({})"))
        tag.attributesEntries.forEach { element.props[fixAttributeName(it.key)] = it.value }

        if (path.isEmpty() && lastLeaved != null) {
            console.error("React only allows single element be returned from render() function")
        }
        path.add(element)
    }

    override fun onTagEnd(tag: Tag) {
        if (path.isEmpty() || currentNode().component.toLowerCase() != tag.tagName.toLowerCase())
            throw IllegalStateException("We haven't entered tag ${tag.tagName} but trying to leave")
        val node = path.removeAt(path.lastIndex)
        val element = React.createElement(node.component, node.props, *node.children)
        if (path.isNotEmpty())
            appendChild(element)
        lastLeaved = element
    }

    override fun onTagEvent(tag: Tag, event: String, value: (Event) -> Unit) {
        val node = currentNode()
        node.props[fixAttributeName(event)] = value
    }

    operator fun<P> ReactComponentSpec<P, *>.invoke(propsBuilder: P.() -> Unit = {}, body: ReactElementBuilder.() -> Unit = {}): ReactElement {
        return createClass().invoke(propsBuilder, body)
    }

    operator fun<P> ReactClass<P, *>.invoke(propsBuilder: P.() -> Unit = {}, body: ReactElementBuilder.() -> Unit = {}): ReactElement {
        val props: P = js("({})")
        props.propsBuilder()
        return node(props, body)
    }

    fun <P> ReactComponentSpec<P, *>.node(props: P, body: ReactElementBuilder.() -> Unit = {}): ReactElement {
        return createClass().node(props, body)
    }

    fun <P> ReactClass<P, *>.node(props: P, body: ReactElementBuilder.() -> Unit): ReactElement {
        val node = buildNode(this, props, body)

        val element = React.createElement(node.component, node.props, node.children)
        if (path.isNotEmpty()) {
            appendChild(element)
        }
        lastLeaved = element
        return element
    }

    fun buildNode(component: dynamic, props: dynamic, body: ReactElementBuilder.() -> Unit): Node {
        // See: https://github.com/fsprojects/Fable/issues/157
        val plained = toPlainObject(props)

        val node = Node(component, undefined, plained)
        path.add(node)
        body()
        path.removeAt(path.lastIndex)
        lastNode = node
        return node
    }

    fun context(name: String): Any? = context[name]

    fun context(name: String, value: Any?, body: () -> Unit) {
        val old = context[name]
        context[name] = value
        try {
            body()
        }
        finally {
            context[name] = old
        }
    }

    fun context(vararg pairs: Pair<String, Any?>, body: () -> Unit) {
        val olds = Array<Any?>(pairs.size) {null}
        pairs.forEachIndexed { i, pair ->
            olds[i] = context(pair.first)
            context[pair.first] = pair.second
        }

        try {
            body()
        }
        finally {
            pairs.forEachIndexed { i, pair ->
                context[pair.first] = olds[i]
            }
        }
    }
}