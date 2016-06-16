import { PlayerService } from './player.service.js'

export class PizzaClickerController {
    constructor (PlayerService) {
        this.PlayerService = PlayerService
    }

    pizzaButtonOnClick () {
        this.PlayerService.addPizza()
    }
}