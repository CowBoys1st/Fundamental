const car = {
    brand: "BMW",
    model: "M135i xDrive",
    price: 800000000
}

console.log(car)

//accessing value
console.log(car.brand)
console.log(car["model"])

const person = {
    name: "Budi",
    email: "budidoremi@gmail.com",
    address: {
        city: "Jakarta",
        country: "Indonesia"
    },
    greet() {
        console.log("Apa lu liat-liat!!")
    }
}

person.greet()

//edit value object
person.name = "Yanto"

// menambah value
person.hobby = "Gaming & coding"

// delete value
delete person.hobby

// console.log(person)

// optional chaining
// console.log(person.address?.city)

//memanggil keys(properties)
console.log(Object.keys(person))

//for looping
for ( let key in person) {
    console.log(key)
    console.log(person[key])

}

// objct destructuring
const { name, email} = person
console.log(name, email)

// spread operator
const objOne = {
    name: "CowBoys"
}
const objTwo = {
    email: "draharjo9@gmail.com"
}

const finalObj = {
    ...objOne, ...objTwo
}

console.log(finalObj)