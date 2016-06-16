import angular from 'angular'
import { PizzaListController } from './pizza-list.controller'
import { PizzaController } from './pizza.controller'
import { PizzaService } from './pizza.service.js'
import { ToppingsController } from './toppings.controller'
import { ToppingsService } from './toppings.service'
import { PizzaToppingsListComponent } from './pizza-toppings-list.component'
import { DraggableDirective } from './dta-li-drag.directive'

export default

  angular.module('dtang.pizza', [])
    .controller('PizzaListController', PizzaListController)
    .controller('PizzaController', PizzaController)
    .controller('ToppingsController', ToppingsController)
    .service('ToppingsService', ToppingsService)
    .service('PizzaService', PizzaService)
    .component('pizzaToppingsList', PizzaToppingsListComponent)
    .directive('dtaDraggable', DraggableDirective)
    .name
