// 0, 1, 1, 2, 3, 5, 8

let num = 15
let a = 0 // 2
let b = 1 // 3

for (let i = 1; i < num; i++) {
    let nextNum = a + b // 3
    a = b
    b = nextNum
}

console.log(a)
console.log(b)