package app

import com.github.andrewoma.react.*
import com.github.andrewoma.react.react
import kotlin.browser.document

data class TestItemProperties(val key: String)
data class TestItemState(val isEditing: Boolean = false)

class TestComponent : ComponentSpec<TestItemProperties, TestItemState>() {
    companion object {
        val factory = react.createFactory(TestComponent())
    }

    fun onDoubleClick() {
        println("Dbl click")
    }

    override fun Component.render() {

        div({ className = "view" }) {
            label({ onDoubleClick = { onDoubleClick() } }) {
                text("Hello from reakt")
            }

            button({
                value = "destroy"
                onDoubleClick = { onDoubleClick() }
            })
        }
    }
}

fun renderReactPart() {
    val container = document.getElementById("react-part")
    react.render(TestComponent.factory(Ref(null)), container!!)
}