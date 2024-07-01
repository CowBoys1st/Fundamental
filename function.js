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

//closure function
function greetings(name) {
    const defaultMessage = "Hello "

    return function () {
        return defaultMessage + name
    }
}

const greetingDavid = greetings("David")
console.log(greetingDavid())

//currying function
function multiplier(factor) {
    return function (number) {
        return factor * number
    }
}

const mul3 = multiplier(3)
const mul5 = multiplier(5)
console.log(mul3(10))

//recursive function
function countDown (fromNumber) {
    console.log(fromNumber)

    let nextNumber = fromNumber + 200
    if (nextNumber < 2000) {
        countDown(nextNumber)
    }
}

// countDown(200)

//arrow function
const sum1 = (a, b) => a + b

console.log(sum1(10,234))
