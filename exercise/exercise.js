function equal(obj1, obj2) {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    for (key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    } return true
}

console.log(equal({a: 2}, {a: 1}))
console.log(equal({a: "Hello"}, {a: 1}))
console.log(equal({a: 1}, {a: 1}))


function perpotongan(obj3, obj4) {
    const k1 = Object.keys(obj3)
    const k2 = Object.keys(obj4)

    for(key of keys3) {
        if (obj3[key])
    }
}