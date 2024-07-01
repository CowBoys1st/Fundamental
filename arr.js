let arr = ["a", "b", "c", "d", "e"]
let arr2 = new Array("a", "b", "c", "d", "e")

// console.log(arr);
// console.log(arr2);

// console.log(arr[0])
// console.log(arr[3])

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

let num = [1, 2, 3, 4, 5]

num.push(6) // menambahkan value dibelakang
num.pop() // menghapus value dibelakang

num.shift() // menghapus value didepan
num.unshift(1) // menambah value didepan

num.splice(1, 2) // menghapus ditengah
num.splice(1, 0, 2, 3) // menambahkan ditengah
// num.splice(1)

num.sort((a, b) => b - a) // descending
num.sort((a, b) => a - b) // ascending

num.reverse() 


console.log(num);


// const n = [23, 4, 101, 3]
// n.sort()
// console.log(n);

// num.forEach((item) => {
//     console.log(item);
// })

// num.map((item) => {
//     console.log(item);
// })

let newNum = num.map((item) => item + 5)
console.log(newNum)

let sumNum = num.reduce((a, b) => a * b)
console.log(sumNum);

const fruits = ["apple", "banana", "melon"]

for (let fruit of fruits) {
    console.log(fruit);
}