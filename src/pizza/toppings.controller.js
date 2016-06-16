import { Topping } from './topping'

export class ToppingsController {
  constructor ($routeParams, $ToppingsService, $location) {
    this.ToppingsService = $ToppingsService
    $ToppingsService.getToppings()
      .then(data => data.map(topping => {
        if (!this.toppings) this.toppings = []
        this.toppings.push(topping)
      }))
  }

  delete (topping) {
    this.ToppingsService.deleteTopping(topping)
      .then(toppings => { this.toppings = toppings })
  }

  save (topping) {
    // todo
  }
}

ToppingsController.$inject = ['$routeParams', 'ToppingsService', '$location']
