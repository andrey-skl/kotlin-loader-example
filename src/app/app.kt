package app

import kotlin.browser.document

fun main(args: Array<String>) {
    println(getGreeting())

    document.getElementById("hello-world")!!.innerHTML = "Welcome to Kotlin Webpack example"
}
