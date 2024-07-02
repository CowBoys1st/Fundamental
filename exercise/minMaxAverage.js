let arr = [12, 5, 23, 18, 4, 45, 32]

// Statistik dengan sort

function statSort(arr) {
    arr.sort((a, b) => a - b)

    let min = arr[0]
    let max = arr[arr.length - 1]

    let sum = arr.reduce((jumlah, nilai) => jumlah + nilai, 0)
    let avg = sum / arr.length

    return {min, max, avg}
}

let res = statSort(arr)

console.log(res)

// end of code

// statistik tanpa sort

function stat(arr) {
    let min1 = Math.min.apply(null, arr)
    let max1 = Math.max.apply(null, arr)
    let sum1 = arr.reduce((a, b) => a +b)
    let avg1 = sum1 / arr.length

    return {min1, max1, avg1}
}

let hasil = stat(arr)

console.log(hasil)