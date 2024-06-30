function sum(num1, num2) {
    let result = num1 + num2
    return result
}

console.log(sum(10, 5))

const square = function(number) {
    return number * number
}

console.log(square(10))

var hello = "abc"

function greeting() {
    hello = "Hello"
    return hello
}

console.log(hello) // abc

// nested function
function getMessage(firstName) {
    function sayHello() {
        return "hello " + firstName + "."
    }
    function welcomeMessage() {
        return "Welcome to Purwadhika!."
}
    return sayHello() + " " + welcomeMessage()
}

const message = getMessage("CowBoys")
console.log(message)