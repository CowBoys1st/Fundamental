let age = 15

if (age >= 17) {
    console.log("You can now create an Id Card")
} else {
    console.log("You are not old enough to create an Id Card")
}

let grade = "B"

if (grade == "A") {
    console.log("Excellent result!")
} else if (grade == "B") {
    console.log("Great result!")
} else if (grade == "C") {
    console.log("Average result!")
} else {
    console.log("Invalid Grade!")
}

switch (grade) {
    case "A":
        console.log("Excellent result!")
        break;
    case "B":
        console.log("Great result!")
        break;
    case "C":
        console.log("Average result!")
        break;
    default:
        console.log("Invalid Grade!")
}

// Ternary
const str = "JavaScript"

console.log(str == "JavaScript" ? "JavaScript" : "Not JavaScript")