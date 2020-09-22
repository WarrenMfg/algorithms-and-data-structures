// ✅ Binary Heap: compact as a possible--not one-sided
// ✅ Left children are always filled first; every left and right is filled before moving to next level down
// ✅ Max Binary Heap: parent nodes are always larger than child nodes
// ✅ Min Binary Heap: parent nodes are always smaller than child nodes

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    // indices
    let child = this.values.push(value) - 1;
    let parent = Math.floor((child - 1) / 2);

    // bubble
    while (value < this.values[parent]) {
      const tempChild = this.values[parent];
      this.values[parent] = value;
      this.values[child] = tempChild;
      child = parent;
      parent = Math.floor((child - 1) / 2);
    }

    return this.values;
  }

  extractMin() {
    if (this.values.length <= 1) return this.values.pop();

    const min = this.values[0];
    this.values[0] = this.values.pop();

    let parent = 0;

    while (true) {
      const left = 2 * parent + 1;
      const right = left + 1;

      const smallestChild =
        this.values[right] < this.values[left] ? right : left;

      if (this.values[smallestChild] < this.values[parent]) {
        const temp = this.values[parent];
        this.values[parent] = this.values[smallestChild];
        this.values[smallestChild] = temp;

        parent = smallestChild;
      } else {
        break;
      }
    }

    return min;
  }
}