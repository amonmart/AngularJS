import  { Player } from './player.js'
import { PlayerService } from './player.service.js'

class PizzaCountControler {
    constructor ($timeout, PlayerService) {
        this.PlayerService = PlayerService
        this.player = PlayerService.player
    }
}

export const PizzaCountComponent = {
    bindings: {
    },
    templateUrl: 'pizzaClicker/pizza-count.html',
    controller: PizzaCountControler
}