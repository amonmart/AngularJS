import { Pizza } from './pizza'

export function pizzaToppingsFilter () {
  return function (pizza) {
    if (!pizza instanceof Pizza) return ''
    if (pizza.toppings) return pizza.toppings2String()
    return ''
  }
}
