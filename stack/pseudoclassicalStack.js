const PseudoclassicalStack = function() {
  this.storage = {};
  this.count = 0;
};

PseudoclassicalStack.prototype.push = function(value) {
  this.storage[this.count] = value;
  return ++this.count;
};

PseudoclassicalStack.prototype.pop = function() {
  this.count > 0 ? this.count-- : this.count = 0;
  let value = this.storage.hasOwnProperty(this.count) ? this.storage[this.count] : null;
  delete this.storage[this.count];
  return value;
};

PseudoclassicalStack.prototype.size = function() {
  return this.count;
};

export default PseudoclassicalStack;