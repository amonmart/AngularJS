export class PizzaToppingsListController {
  constructor () {
    //console.log(this.toppingList)
  }

  availableOnClick ($event) {
    this.onAddTopping({
      $event
    })
  }

  toppingOnClick (topping) {
    console.log(this.toppingList)
    console.log(topping)
    this.toppingList.splice(this.toppingList.indexOf(topping), 1)
  }
}

