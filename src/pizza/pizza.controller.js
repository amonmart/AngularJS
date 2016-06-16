export class PizzaController {
  constructor ($routeParams, $PizzaService, $location, ToppingsService) {
    this.PizzaService = $PizzaService
    this.$location = $location
    ToppingsService.getToppings()
    .then(data => data.map(topping => {
        if (!this.availableToppings) this.availableToppings = []
       this.availableToppings.push(topping)
      }))

    $PizzaService.getPizza($routeParams.id)
      .then(pizza => { this.pizza = pizza })
  }

  addTopping (topping) {
    this.pizza.addTopping(topping.key)
  }

  savePizza (form) {
    if (form.$invalid) return
    this.PizzaService.savePizza(this.pizza)
      .then(() => {
        this.$location.path('/pizzas')
      })
  }
}

PizzaController.$inject = ['$routeParams', 'PizzaService', '$location', 'ToppingsService']
