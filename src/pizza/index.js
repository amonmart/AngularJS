import angular from 'angular'
import { PizzaListController } from './pizza-list.controller'
import { PizzaController } from './pizza.controller'
import { PizzaService } from './pizza.service.js'

export default

  angular.module('dtang.pizza', [])
    .controller('PizzaListController', PizzaListController)
    .controller('PizzaController', PizzaController)
    .service('PizzaService', PizzaService)
    .name
