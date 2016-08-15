package react

import org.w3c.dom.*
import runtime.toPlainObject
import kotlin.js.native

@native
object React {
    fun createElement(component: dynamic, prop: dynamic, vararg children: dynamic): ReactElement = noImpl
}

@Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
fun <P, S> ReactComponentSpec<P, S>.createClass(): ReactClass<P, S> {
    var klass = this.asDynamic().klass
    if (klass == null) {
        val spec = toPlainObject(asDynamic().__proto__)
        spec.displayName = componentName()
        spec.renderComponent = spec.render
        spec.render = fun dynamic.(): ReactElement {
            val reb = ReactElementBuilder()
            renderComponent(reb)
            return reb.finalize()
        }

        klass =  js("React.createClass(spec)")
    }

    return klass
}

@native
object ReactDOM {
    fun render(element: dynamic, container: Element?): dynamic = noImpl
    fun<TProps, TState> findDOMNode(component: ReactComponentSpec<TProps, TState>): Element
    fun unmountComponentAtNode(domContainerNode: Element?)
}

inline fun event(noinline  f: (dynamic) -> Unit ): dynamic = { e: dynamic ->
    f(e)
}.asDynamic()

fun component(outer: ReactElementBuilder, body: ReactElementBuilder.() -> Unit): ReactElement = ReactElementBuilder(outer).apply(body).finalize()

fun component(body: ReactElementBuilder.() -> Unit): ReactElement = ReactElementBuilder().apply(body).finalize()

fun Element?.react(body: ReactElementBuilder.() -> Unit) {
    if (this == null)
        throw IllegalArgumentException("DOM Element is null")
    ReactDOM.render(ReactElementBuilder().apply(body).finalize(), this)
}


val reactDOM: ReactDOM = runtime.require("react-dom")
