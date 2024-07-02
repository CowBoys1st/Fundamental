let arr = [5, 3, 1, 7, 2, 6]

function toSecond(arr) {
    arr.sort((a, b) => a - b)
    let second = 0

    for(i = 0; i < arr.length; i++) {
        if(arr[i] > arr[0]) {
            second = arr[i]
            break
        }
    }
    return second
}

console.log(toSecond(arr))