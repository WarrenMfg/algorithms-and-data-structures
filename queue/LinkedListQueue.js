class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  createNewNode(value) {
    return {
      value,
      next: null
    };
  }

  // similar to .push() for linked list
  enqueue(value) {
    const newNode = this.createNewNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return ++this.length;
  }

  // similar to .shift() for linked list
  dequeue() {
    if (!this.head) return null;

    const dequeued = this.head;

    if (this.head === this.tail) {
      this.tail = null;
    }

    this.head = dequeued.next;
    this.length--;

    return dequeued.value;
  }

  size() {
    return this.length;
  }

}

export default LinkedListQueue;