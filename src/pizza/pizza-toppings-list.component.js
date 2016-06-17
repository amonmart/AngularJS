import { PizzaToppingsListController } from './pizza-toppings-list.controller'

export const PizzaToppingsListComponent = {
  bindings: {
    toppingList: '<',
    availableToppings: '<',
    onAddTopping: '&'
  },
  controller: PizzaToppingsListController,
  templateUrl: 'pizza-toppings-list.html'
}
