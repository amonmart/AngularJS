export class Pizza {
  constructor ({id = -1, name, status, toppings = []}) {
    this.id = id
    this.name = name
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

  json () {
    return {
      id: this.id,
      name: this.name,
      status: this.status,
      toppings: this.toppings
    }
  }
}
