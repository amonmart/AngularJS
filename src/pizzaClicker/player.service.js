import { Player } from './player.js'

export class PlayerService {
    constructor() {
        this.player = new Player(0)
    }

    upgrade(upgradeName, cost) {
        var test = false
        this.player.upgradesUnlocked.filter((item) => item === upgradeName).forEach(() => { test = true })
        if (!test) {
            if (this.player.pizzaCount >= cost) {
                this.player.upgradesUnlocked.push(upgradeName)
                switch (upgradeName) {
                    case 'Multi2':
                        this.player.pizzaCount = this.player.pizzaCount - cost
                        this.player.pizzaPerClickMultiplier = this.player.pizzaPerClickMultiplier * 2
                        break
                    case 'Plus1':
                        this.player.pizzaCount = this.player.pizzaCount - cost
                        this.player.pizzaPerClick = this.player.pizzaPerClick + 1
                        break
                }
            }
        }
    }

    addPizza() {
        console.log('multi', this.player.pizzaPerClickMultiplier)
        console.log('plus', this.player.pizzaPerClick)
        this.player.pizzaCount = this.player.pizzaCount + this.player.pizzaPerClick * this.player.pizzaPerClickMultiplier
    }

    getPizzaCount() {
        return this.Player.pizzaCount
    }
}
