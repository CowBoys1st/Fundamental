function statistikSort(arr) {
    if (arr.length === 0) return null

    arr.sort((a, b) => a - b)

    const min = arr[0]
    const max = arr[arr.length - 1]

    const sum = arr.reduce((jumlah, nilai) => jumlah + nilai, 0)
    const avg = sum / arr.length

    return min
}



const arr = [12, 5, 23, 18, 4, 45, 32]
const res1 = statistikSort(arr)

console.log(res1)