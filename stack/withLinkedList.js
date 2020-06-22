class Stack {
  constructor(){
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  createNewNode(value) {
    return {
      value,
      next: null
    };
  }

  // similar to .unshift() for linked list
  push(value) {
    const newNode = this.createNewNode(value);

    if (!this.first) {
        this.first = newNode;
        this.last = newNode;
    } else {
        const temp = this.first;
        this.first = newNode;
        this.first.next = temp;
    }

    return ++this.count;
  }

  // similar to .shift() for linked list
  pop() {
    if (!this.first) return null;

    const temp = this.first;
    if (this.first === this.last) {
        this.last = null;
    }

    this.first = this.first.next;
    this.count--;

    return temp.value;
  }

  size() {
    return this.count;
  }

}

export default Stack;