package react

import kotlin.browser.document

class RenderHtmlComponentProps(val builder: ReactElementBuilder.()->Unit)
val RenderHtmlComponent = object: StatelessComponentSpec<RenderHtmlComponentProps> {
    override fun componentName() = "ReactElementBuilderComponent"

    override fun ReactElementBuilder.render() {
        return with(props) {builder()}
    }
}

fun ReactElementBuilder.cluiComponent(builder: ReactElementBuilder.()->Unit): ReactElement {
    val props = RenderHtmlComponentProps(builder)
    return RenderHtmlComponent.node(props)
}

fun renderHtml(builder: ReactElementBuilder.()->Unit): String {
    with(ReactElementBuilder()) {
        val container = document.createElement("div")
        reactDOM.render(cluiComponent(builder), container)
        val html = container.innerHTML
        reactDOM.unmountComponentAtNode(container)
        return html
    }
}
