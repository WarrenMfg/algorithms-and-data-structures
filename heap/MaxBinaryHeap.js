// ✅ Binary Heap: compact as a possible--not one-sided
// ✅ Left children are always filled first; every left and right is filled before moving to next level down
// ✅ Max Binary Heap: parent nodes are always larger than child nodes
// ✅ Min Binary Heap: parent nodes are always smaller than child nodes

class MaxBinaryHeap {
  constructor() {
    this.values = [100, 65, 99, 45];
  }

  insert(value) {
    // indices
    let child = this.values.push(value) - 1;
    let parent = Math.floor((child - 1) / 2);

    // bubble
    while (value > this.values[parent]) {
      const tempChild = this.values[parent];
      this.values[parent] = value;
      this.values[child] = tempChild;
      child = parent;
      parent = Math.floor((child - 1) / 2);
    }

    return this.values;
  }

  extractMax() {
    const last = this.values.pop();

    if (!this.values.length) return last;

    const max = this.values[0];

    this.values[0] = last;

    let parent = 0;

    while (true) {
      const left = 2 * parent + 1;
      const right = left + 1;

      const largestChild =
        this.values[right] > this.values[left] ? right : left;

      if (this.values[largestChild] > this.values[parent]) {
        const temp = this.values[parent];
        this.values[parent] = this.values[largestChild];
        this.values[largestChild] = temp;

        parent = largestChild;
      } else {
        break;
      }
    }

    return max;
  }
}