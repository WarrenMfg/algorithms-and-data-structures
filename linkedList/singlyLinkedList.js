export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList {
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
      this.tail = newNode;
    }

    return ++this.length;
  }

  pop() {
    if (!this.tail) return undefined;

    if (this.head === this.tail) {
      const popped = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return popped.value;
    }

    let pre = this.head;
    let lead = pre;
    while (lead.next) {
      pre = lead;
      lead = lead.next;
    }
    const popped = lead;
    pre.next = null;
    this.tail = pre;
    this.length--;
    return popped.value;
  }

  shift() {
    if (!this.head) return undefined;

    const shifted = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return shifted.value;
    }

    this.head = this.head.next;
    shifted.next = null;
    this.length--;
    return shifted.value;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    return ++this.length;
  }

  get(index, nodeWanted = true) {
    if (index < 0 || index > this.length - 1) return undefined;

    let counter = 0;
    let pointer = this.head;
    while (counter !== index) {
      counter++;
      pointer = pointer.next;
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
    pre.next = newNode;
    newNode.next = post;
    return ++this.length;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const pre = this.get(index - 1);
    const removed = pre.next;
    const post = removed.next;
    pre.next = post;
    this.length--;
    return removed.value;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next; // save ref to node.next
      node.next = prev; // reassign node.next to prev (from last iteration)
      // move prev and node refs forward
      prev = node;
      node = next;
    }
    return this.head;
  }
}