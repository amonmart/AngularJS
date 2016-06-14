import { Pizza } from './pizza'

export class PizzaListController {
  constructor ($timeout) {
    this.$timeout = $timeout

    this.pizzas = [
      new Pizza({ name: 'Pizza 1', prix: 12, status: 0, toppings: ['eggs', 'eggs', 'apple', 'mushrooms'] }),
      new Pizza({ name: 'Pizza 2', prix: 14, status: 0, toppings: ['eggs', 'apple', 'ham', 'mushrooms', 'orange'] }),
      new Pizza({ name: 'Pizza 3', prix: 13, status: 0 }),
      new Pizza({ name: 'Pizza 4', prix: 18, status: 0, toppings: ['apple', 'mushrooms'] }),
      new Pizza({ name: 'Pizza 5', prix: 120, status: 0, toppings: ['eggs', 'apple', 'ham', 'mushrooms'] })
    ].map(pizza => {
      pizza._toppings = pizza.toppings2String()
      pizza._toppingsLenght = pizza.toppings.length
      return pizza
    })
  }

  addPizza () {
    this.pizzas.push({
      name: 'new pizza'
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
