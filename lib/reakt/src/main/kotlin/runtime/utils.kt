package runtime

fun String.partition(char: Char) : Pair<String, String> {
    val idx = indexOf(char)

    return when {
        idx in 0 .. length - 1 -> substring(0, idx) to substring(idx + 1)
        else -> this to ""
    }
}

var r: Int = 0
fun random(): String {
    return (++r).toString() // TODO: Need better random
}


val idFirstChars = ('a'..'z').plus('A'..'Z').toSet()
val idOtherChars = idFirstChars.plus('0'..'9').plus(listOf('_', '-', ':', '.')).toSet()

fun makeValidId(text: String): String {
    if (text.isEmpty())
        return "a"

    val sb = StringBuilder(text.length)
    if (!idFirstChars.contains(text[0]))
        sb.append('z')

    text.forEach {
        if (!idOtherChars.contains(it))
            sb.append('_')
        else
            sb.append(it)
    }
    return sb.toString()
}

fun isValidId(id: String): Boolean {
    return id.equals(makeValidId(id))
}
