class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
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