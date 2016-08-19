package app

import kotlin.browser.document
import kotlinx.html.*
import react.*

class CompProps {
    var text: String? = null
}

var TestComp = object : StatelessComponentSpec<CompProps> {
    override fun componentName() = "TestComp"

    override fun ReactElementBuilder.render() {
        button {
            span {
                addClass("some-css-class")
                +"Hello World"
            }
        }
    }
}

fun renderReactPart() {
    val React: React = runtime.require("react")

    reactDOM.render(React.createElement(TestComp.createClass(), {}), document.getElementById("react-part"))
}