// Abjad besar dimulai dari angka 65

function convert(title) { // AB
    let num = 0

    for (let i = 0; i < title.length; i++) {
        num = num * 26 + (title.charCodeAt(i) - 'A'.charCodeAt() + 1)
        // num = 0 * 26 + (65 - 65 + 1)
        // num = 1 * 26 + (66 - 65 + 1)
    }
    return num
}

// console.log("BC".charCodeAt(1) - "A".charCodeAt(0) + 1)

console.log(convert("AZ")) 
console.log(convert("CA"))
console.log(convert("Z"))
console.log(convert("AZ"))
console.log(convert("BZ"))
console.log("Z".charCodeAt())