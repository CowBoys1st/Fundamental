function switchArr(arr) {
    let res = {}

    for (let key in arr[0]) {
        res[arr[0][key]] = key
    } return [res]
}

console.log(switchArr([{ name: "David", age: 20, email: "david@gmail.com"}]))