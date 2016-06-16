import  { Player } from './player.js' 

export class PlayerService {
    constructor () {
        this.player = new Player(0)
    }

    upgrade (upgradeName) {
        this.player.upgrades.push(upgradeName)
    }

    addPizza () {
        console.log(this.player.pizzaPerClickMultiplier)
        this.player.pizzaCount = this.player.pizzaCount + this.player.pizzaPerClick * this.player.pizzaPerClickMultiplier
    }

    getPizzaCount () {
        return this.Player.pizzaCount
    }
}