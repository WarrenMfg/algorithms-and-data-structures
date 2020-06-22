var PseudoclassicalQueue = function() {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

PseudoclassicalQueue.prototype.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
  return this.size();
};

PseudoclassicalQueue.prototype.dequeue = function() {
  if (this.tail > this.head) {
    let value = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return value;
  } else {
    return null;
  }
};

PseudoclassicalQueue.prototype.size = function() {
  return this.tail - this.head;
};

export default PseudoclassicalQueue;