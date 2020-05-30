const Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  this.count > 0 ? this.count-- : this.count = 0;
  let value = this.storage.hasOwnProperty(this.count) ? this.storage[this.count] : null;
  delete this.storage[this.count];
  return value;
};

Stack.prototype.size = function() {
  return this.count;
};