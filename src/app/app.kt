package org.sample

import kotlin.browser.document

fun main(args: Array<String>) {
    document.getElementById("hello-world")?.innerHTML = "Welcome to Kotlin Webpack example"
    println("Hello, world!")

    val el = document.createElement("div")
    el.appendChild(document.createTextNode("Hello!"))
    document.body?.appendChild(el)
}
