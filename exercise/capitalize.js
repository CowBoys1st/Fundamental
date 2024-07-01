let str = "halo halo bandung"
let result = ""

for (let i = 0; i < str.length; i++) {
    if (i == 0 || str.charAt(i - 1) == " ") {
        result += str.charAt(i).toUpperCase()
    } else {
        result += str.charAt(i).toLowerCase()
    }
}

console.log(result);