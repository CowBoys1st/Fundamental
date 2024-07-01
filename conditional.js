let age = 15;

if (age >= 17) {
  console.log("You can now create an Id Card");
} else {
  console.log("You are not old enough to create an Id Card");
}

let grade = "B";

if (grade == "A") {
  console.log("Excellent Result");
} else if (grade == "B") {
  console.log("Great Result");
} else if (grade == "C") {
  console.log("Average Result");
} else {
  console.log("Invalid Grade");
}

switch (grade) {
  case "A":
    console.log("Excellent Result");
    break;
  case "B":
    console.log("Great Result");
    break;
  case "C":
    console.log("Average Result");
    break;
  default:
    console.log("Invalid Grade")
    break;
}


let car = "BMW"

if (car == "BMW" || car == "TOYOTA") {
    console.log("This car is awesome")
}

const str = "js"

// ternary
// console.log(str === "Javascript" ? "Javascript" : 
//             str === "PHP" ? "PHP" :
//             "not Javascript and PHP")

str == "js" && console.log("Javascript")