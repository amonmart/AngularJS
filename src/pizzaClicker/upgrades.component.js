import { Player } from './player.js'
import { PlayerService } from './player.service.js'

class UpgradesControler {
    constructor($timeout, PlayerService) {
        this.PlayerService = PlayerService
        this.player = PlayerService.player
    }

    click(upgradeName, cost) {
        if (this.player.pizzaCount >= cost) {
            switch (upgradeName) {
                case 'Multi2':
                    this.player.pizzaCount = this.player.pizzaCount - cost
                    this.player.pizzaPerClickMultiplier = this.player.pizzaPerClickMultiplier * 2
                    return this.PlayerService.upgrade(upgradeName)
                case 'Plus1':
                    this.player.pizzaCount = this.player.pizzaCount - cost
                    this.player.pizzaPerClick = this.player.pizzaPerClick + 1
                    return this.PlayerService.upgrade(upgradeName)
            }


        }
    }
}

export const UpgradesComponent = {
    bindings: {
    },
    templateUrl: 'pizzaClicker/upgrades.html',
    controller: UpgradesControler
}