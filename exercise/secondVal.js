let arr = [5, 3, 1, 7, 2, 6]

function toSecond(arr) {
    arr.sort((a, b) => a - b)
    return arr[1]
}

console.log(toSecond(arr))