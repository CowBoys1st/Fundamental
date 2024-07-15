function sum(a, b, callback) {
    callback(a + b)
}

function displayer(value) {
    console.log(value)
}

sum(10, 5, displayer)