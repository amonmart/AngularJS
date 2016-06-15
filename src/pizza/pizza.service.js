import { Pizza } from './pizza'

export class PizzaService {
  constructor ($timeout, $http, $location) {
    this.$timeout = $timeout
    this.$http = $http
  }

  getPizzas () {
    return this.$http.get('http://localhost:1337/pizzas')
      .then(response => {
        return response.data
          .map(obj => new Pizza(obj))
      })
  }

  getPizza (id) {
    return this.$http.get('http://localhost:1337/pizzas/' + id)
      .then(response => {
        return new Pizza(response.data)
      })
  }

  getToppings () {
    if (this.toppings) {
      return this.$q.resolve(this.toppings)
    } else {
      return this.$http.get('http://localhost:1337/toppings')
        .then(response => {
          this.toppings = response.data
          return this.toppings
        })
    }
  }

  savePizza (pizza) {
    return this.$http.put('http://localhost:1337/pizzas/' + pizza.id, pizza)
  }

  addPizza (pizza) {
    return this.$http.post('http://localhost:1337/pizzas', {
      name: pizza.name,
      status: pizza.status,
      toppings: pizza.toppings
    })
      .then(response => this.getPizzas())
  }

  deletePizza (pizza) {
    return this.$http.delete('http://localhost:1337/pizzas/' + pizza.id)
      .then(() => { return this.getPizzas() })
  }
}

PizzaService.$inject = ['$timeout', '$http', '$location']
