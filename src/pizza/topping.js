export class Topping {
  constructor ({id = -1, key, fr}) {
    this.id = id
    this.key = key
    this.fr = fr
  }

  json () {
    return {
      id: this.id,
      key: this.key,
      fr: this.fr
    }
  }
}
