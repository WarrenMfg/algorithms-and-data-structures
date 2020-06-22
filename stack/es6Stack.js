class ES6Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.storage[this.count] = value;
    return ++this.count;
  }

  pop() {
    this.count > 0 ? this.count-- : this.count = 0;
    let value = this.storage.hasOwnProperty(this.count) ? this.storage[this.count] : null;
    delete this.storage[this.count];
    return value;
  }

  size() {
    return this.count;
  }
}

export default ES6Stack;