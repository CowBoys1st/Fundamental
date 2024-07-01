function sum(num1, num2 = 0, ...more) {
    let result = num1 + num2
    return result
}

console.log(sum(10, 5, 1, 2, 3, 4, 5))

const square = function(number) {
    return number * number
}

console.log(square(10))

// var hello = "abc"

// function greeting() {
//     let hello = "Hello"

//     return hello
// }

// console.log(hello)

// nested function
function getMessage(firstname) {
    function sayHello() {
        return "Hello " + firstname + "."
    }

    function welcomeMessage() {
        return "Welcome to purwadhika!"
    }

    return sayHello() + " " + welcomeMessage()
}

console.log(getMessage(12))