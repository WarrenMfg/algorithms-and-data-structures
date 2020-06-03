export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    return ++this.length;
  }

  pop() {
    if (!this.tail) return undefined;

    const popped = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      this.length--;
    }

    popped.prev = null;
    return popped.value;
  }

  shift() {
    if (!this.head) return undefined;

    const shifted = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.head = shifted.next;
      this.head.prev = null;
      this.length--;
    }

    shifted.next = null;
    return shifted.value;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    return ++this.length;
  }

  get(index, nodeWanted = true) {
    if (index < 0 || index > this.length - 1) return undefined;

    let counter;
    let pointer;

    // start from head
    if (index <= this.length / 2) {
      counter = 0;
      pointer = this.head;
      while (counter !== index) {
        pointer = pointer.next;
        counter++;
      }

    // start from tail
    } else {
      counter = this.length - 1;
      pointer = this.tail;
      while (counter !== index) {
        pointer = pointer.prev;
        counter--;
      }
    }

    return nodeWanted ? pointer : pointer.value;
  }

  set(index, value) {
    const node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    const pre = this.get(index - 1);
    const post = pre.next;
    // connect pre and newNode
    pre.next = newNode;
    newNode.prev = pre;
    // connect post and newNode
    post.prev = newNode;
    newNode.next = post;
    return ++this.length;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removed = this.get(index);
    const pre = removed.prev;
    const post = removed.next;
    // connect pre and post
    pre.next = post;
    post.prev = pre;
    this.length--;
    // nullify removed
    removed.prev = null;
    removed.next = null;
    return removed.value;
  }

  reverse() {
    // swap tail and head
    const newHead = this.tail;
    this.tail = this.head;
    this.head = newHead;

    let pointer = this.head;
    while (pointer) {
      // swap prev and next properties
      const temp = pointer.next;
      pointer.next = pointer.prev;
      pointer.prev = temp;
      pointer = pointer.next;
    }

    return this.head;
  }
}