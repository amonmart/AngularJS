import { PizzaClickerController } from './pizza-clicker.controller'
import { PizzaClickerComponent } from './pizza-clicker.component'
import { PizzaButtonComponent } from './pizza-button.component'
import { PizzaCountComponent } from './pizza-count.component'
import { UpgradesComponent } from './upgrades.component'
import { PlayerService } from './player.service.js'

export default

  angular.module('dtang.pizzaClicker', [])
    .controller('PizzaClickerController', PizzaClickerController)
    .component('pizzaClickerComponent', PizzaClickerComponent)
    .component('pizzaButton', PizzaButtonComponent)
    .component('pizzaCount', PizzaCountComponent)
    .component('upgrades', UpgradesComponent)
    .service('PlayerService', PlayerService)
    .name