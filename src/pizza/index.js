import angular from 'angular'
import { PizzaController } from './pizza.controller'
import { PizzaService } from './pizza.service.js'
import { ToppingsController } from './toppings.controller'
import { ToppingsService } from './toppings.service'
import { PizzaToppingsListComponent } from './pizza-toppings-list.component'
import { PizzaListComponent } from './pizza-list.component.js'

export default

  angular.module('dtang.pizza', [])
    .controller('PizzaController', PizzaController)
    .controller('ToppingsController', ToppingsController)
    .service('ToppingsService', ToppingsService)
    .service('PizzaService', PizzaService)
    .component('pizzaToppingsList', PizzaToppingsListComponent)
    .component('pizzaList', PizzaListComponent)
    .name
