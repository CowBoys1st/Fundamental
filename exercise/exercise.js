function equal(o1, o2) {
    const k1 = Object.keys(o1)
    const k2 = Object.keys(o2)

    for (key of k1) {
        if (o1[key] !== o2[key]) {
            return false
        }
    } return true
}

console.log(equal({a: 2}, {a: 1}))
console.log(equal({a: "Hello"}, {a: 1}))
console.log(equal({a: 1}, {a: 1}))