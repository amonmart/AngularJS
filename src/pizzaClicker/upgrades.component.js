import { Player } from './player.js'
import { PlayerService } from './player.service.js'

class UpgradesControler {
  constructor ($timeout, PlayerService) {
    this.PlayerService = PlayerService
    this.player = PlayerService.player
    this.upgrades = this.player.upgradesUnlocked
  }

  isUnlocked (upgrade) {
      var test
      this.player.upgradesUnlocked.filter((item) => item === upgrade).forEach(() => { test = true })
      return test
  }

  click (upgradeName, cost) {
    this.PlayerService.upgrade(upgradeName, cost)
  }
}

export const UpgradesComponent = {
  bindings: {
  },
  templateUrl: 'pizzaClicker/upgrades.html',
  controller: UpgradesControler
}

UpgradesControler.$inject = ['$timeout', 'PlayerService', '$http']