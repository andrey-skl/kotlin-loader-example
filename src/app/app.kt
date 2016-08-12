package org.sample

import kotlin.dom.*
import kotlin.browser.*

fun main() {
    document.getElementById("hello-world")?.setAttribute("value", "hello@kotlinlang.org")
    println("Hello, world!")

    val el = document.createElement("div")
    el.appendChild(document.createTextNode("Hello!"))
    document.body?.appendChild(el)
}
