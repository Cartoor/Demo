class JQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector)
    for(let key in result) {
      this[key] = result[key]
    }
    this.length = result.length
    this.selector = selector
  }

  get(index) {
    return this[index]
  }

  each(fn) {
    for(let i = 0; i < this.length; i++) {
      const elem = this[i]
      fn(elem)
    }
  }

  on(type, listener) {
    return this.each(elem => {
      elem.addEventListener(type, listener, false)
    })
  }
}