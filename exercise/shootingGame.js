class Player {
    power = 10
    health = 100

    constructor(nama) {
        this.name = nama
    }

    showStatus() {
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power}) `)
    }

    hit(power) {
        this.health -= power
        console.log(`Player ${this.name} has been damaged by ${power} points`)
        console.log(`Player ${this.name} has ${this.health} remaining health`)
    }


}

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
    }

    start() {
        console.log("~~ Game Start ~~")
        while (this.player1.health > 1 && this.player2.health > 1) {
            console.log(`Player ${this.player1.name} turn`)
            this.player1.showStatus()
            this.player2.hit(this.player1.power)
            if (this.player2.health <= 0) break

            console.log(`Player ${this.player2.name} turn`)
            this.player2.showStatus()
            this.player1.hit(this.player2.power)
            if (this.player1.health <= 0) break
        }

        if (this.player1.health <= 0) {
            console.log(`The winneris player ${this.player2.name}`)
        } else {
            console.log(`The winneris player ${this.player1.name}`)

        }

        console.log("~~ End Game ~~")
    }

    getRandomItem() {
        this.health += 0
        this.health += 10
        this.power += 0
        this.power += 10
    }
}
const yanto = new Player("Yanto")
const cowboys = new Player("CowBoys")

const game = new ShootingGame(yanto, cowboys)
game.start()

