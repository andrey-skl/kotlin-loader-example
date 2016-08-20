package runtime

@native
fun require(module: String): dynamic = noImpl

inline fun <T> jsObject(builder: T.() -> Unit): T {
    val obj: T = js("({})")
    return obj.apply {
        builder()
    }
}

inline fun js(builder: dynamic.() -> Unit): dynamic = jsObject(builder)

fun Any.getOwnPropertyNames() : Array<String> {
    val me = this
    return js("Object.getOwnPropertyNames(me)")
}

/**
 * Copy Kotlin POKO to plain JS, ommiting __proto_ and anything like that.
 */
fun toPlainObject(me: Any): dynamic {
    val obj = js("({})")
    for (p in me.getOwnPropertyNames().filterNot { it == "__proto__" || it == "constructor" }) {
        js("obj[p]=me[p]")
    }
    return obj
}

fun toPlainObject(me: Any, extraPropertiesToIgnore: List<String> = emptyList(), extraPropertiesToAdd: List<Pair<String, Any?>> = emptyList()): dynamic {
    val obj = js("({})")
    for (p in me.getOwnPropertyNames().filterNot { it == "__proto__" || it == "constructor" || extraPropertiesToIgnore.contains(it) }) {
        js("obj[p]=me[p]")
    }

    extraPropertiesToAdd.forEach {
        obj["${it.first}"] = it.second
    }
    return obj
}

fun <T> Array<T>.push(t: T) {
    asDynamic().push(t)
}
