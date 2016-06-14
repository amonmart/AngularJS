import angular from 'angular'
import { PizzaListController } from './pizza-list.controller'
import { PizzaController } from './pizza.controller'

export default

  angular.module('dtang.pizza', [])
    .controller('PizzaListController', PizzaListController)
    .controller('PizzaController', PizzaController)
    .name
