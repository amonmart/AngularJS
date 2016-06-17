export class PizzaToppingsListController {
  constructor ($element) {
    this.$element = $element
  }

  availableOnClick ($event) {
    this.onAddTopping({
      $event
    })
  }

  dropped () {
    this.availableOnClick(this.draggedTopping)
  }

  drag (topping) {
    this.draggedTopping = topping
  }

  toppingOnClick (topping) {
    console.log(this.toppingList)
    console.log(topping)
    this.toppingList.splice(this.toppingList.indexOf(topping), 1)
  }
}

