export class Pizza {
  constructor ({name, prix, status, toppings = []}) {
    this.name = name
    this.prix = prix
    this.toppings = toppings
    this.status = status
  }

  toppings2String () {
    return this.toppings
      .reduce((accu, topping) => {
        if (accu.indexOf(topping) === -1) accu.push(topping)
        return accu
      }, [])
      .map(topping => {
        const size = this.toppings.filter(item => item === topping).length
        if (size > 1) return `${topping} x${size}`
        return `${topping}`
      })
      .join(', ')
  }
}
