const person = {
    name: "Budi",
    email: "budiyanto@gmail.com",
    greet() {
        return "Hello, " + this.name
    }
}

// template untuk membuat object
class Person {
    name;
    email;
    static species = "Human";
    constructor(nama, surel) {
        this.name = nama
        this.email = surel
    }
    greet() {
        console.log("Hello, " + this.name)
    }
}

const person1 = new Person("Yanti", "yanti@gmail.com")
const person2 = new Person("CowBoys", "cowboys@gmail.com")
console.log(person1)
console.log(person2)
console.log(Person.species)
