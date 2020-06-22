class LinkedListStack {
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

    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        const temp = this.head;
        this.head = newNode;
        this.head.next = temp;
    }

    return ++this.count;
  }

  // similar to .shift() for linked list
  pop() {
    if (!this.head) return null;

    const temp = this.head;
    if (this.head === this.tail) {
        this.tail = null;
    }

    this.head = this.head.next;
    this.count--;

    return temp.value;
  }

  size() {
    return this.count;
  }

}

export default LinkedListStack;