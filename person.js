const person = {
    firstName: "Dwi",
    lastName: "Raharjo",
    greet () {
        console.log(`Hello ${this.firstName}`)
    }
}

person.greet()