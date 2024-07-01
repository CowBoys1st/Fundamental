let num = 1000000000
let strNum = num.toString() // "1234"
let rupiah = ""
let count = 0

for (let i = strNum.length - 1; i >= 0; i--) {
    rupiah = strNum.charAt(i) + rupiah
    count++

    if (count % 3 == 0 && strNum.length !== count) {
        rupiah = "." + rupiah
    }
}

console.log(`Rp. ${rupiah},00`);
console.log(Number.MAX_SAFE_INTEGER)