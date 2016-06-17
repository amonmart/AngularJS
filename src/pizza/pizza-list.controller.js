import { Pizza } from './pizza'

export class PizzaListController {
  constructor ($timeout, PizzaService, $http) {
    this.$timeout = $timeout
    this.PizzaService = PizzaService
    this.$http = $http
    this.$location
    this.pizza = null

    this.PizzaService.getPizzas()
      .then(pizzas => {
        this.pizzas = this.initPizzas(pizzas)
      })
  }

  initPizzas (pizzas) {
    return pizzas
      .map(pizza => {
        pizza._toppings = pizza.toppings2String()
        pizza._toppingsLength = (pizza.toppings || []).length
        return pizza
      })
  }

  addPizza () {
    var pizza = new Pizza({name: 'Nouvelle Pizza !', status: 0, toppings: ['Albert', 'Jean-Michel']})
    this.PizzaService.addPizza(pizza)
    .then(pizzas => {
      this.pizzas = pizzas
      this.initPizzas(pizzas)
    })
  }

  deletePizza (pizza) {
    this.PizzaService.deletePizza(pizza)
    .then(pizzas => {
      this.pizzas = pizzas
      this.initPizzas(pizzas)
    })
  }

  cookPizza (pizza) {
    this.$timeout(() => {
      pizza.status = 1
    }, 1000)
  }

  cookPizzas () {
    const pizza = this.pizzas.find(p => p.status === 0)
    if (!pizza) return
  }
}

PizzaListController.$inject = ['$timeout', 'PizzaService', '$http']
