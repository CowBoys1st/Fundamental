let arr = ["apple", "banana", "cherry", "date"]

function arrayString (arr) {
    let last = arr.pop()
    return arr.join(", ") + ", and " + last
}

console.log(arrayString(arr))