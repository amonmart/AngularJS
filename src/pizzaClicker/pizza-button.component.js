import  { Player } from './player.js'

class PizzaButtonControler {
    constructor ($timeout) {
        this.$timeout = $timeout
        this.isClicked = false
    }

    click () {
        this.isClicked = true
        this.$timeout(() => this.isClicked = false,20)
    }
}

export const PizzaButtonComponent = {
    bindings: {
        onClick: '&'
    },
    templateUrl: 'pizzaClicker/pizza-button.html',
    controller: PizzaButtonControler
}