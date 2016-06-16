import { Topping } from './topping'

export class ToppingsService {
  constructor ($timeout, $http, $location, $q) {
    this.$timeout = $timeout
    this.$http = $http
    this.$q = $q
  }

  saveTopping (topping) {
    return this.$http.post('http://localhost:1337/toppings', topping.json())
  }

  deleteTopping (topping) {
    return this.$http.delete('http://localhost:1337/toppings/' + topping.id)
      .then(() => { return this.getToppings() })
  }

  getToppings () {
    if (this.toppings) {
      return this.$q.resolve(this.toppings)
    } else {
      return this.$http.get('http://localhost:1337/toppings')
        .then(response => {
          this.toppings = response.data
            .map(obj => new Topping(obj))
          return this.toppings
        })
    }
  }
}

ToppingsService.$inject = ['$timeout', '$http', '$location', '$q']
