import Queue from '../queue/ES6Queue';

class BinarySearchTree {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  createNewNode(value) {
    return {
      value,
      left: null,
      right: null
    };
  }

  insert(value = null) {
    // no argument
    if (value === null) return false;
    // insert root
    if (this.value === null) {
      this.value = value;
      return true;
    }

    let pointer = this;

    while (true) {
      // value goes left
      if (value < pointer.value) {
        if (pointer.left) {
          pointer = pointer.left;
        } else {
          pointer.left = this.createNewNode(value);
          return true;
        }

        // value goes right
      } else if (value > pointer.value) {
        if (pointer.right) {
          pointer = pointer.right;
        } else {
          pointer.right = this.createNewNode(value);
          return true;
        }

        // duplicate value/key
      } else {
        return false;
      }
    }
  }

  contains(value = null) {
    // no argument or no root
    if (value === null || this.value === null) return false;

    // edge case
    if (value === this.value) return true;

    let pointer = this;
    while (true) {
      if (value < pointer.value) {
        if (pointer.left) pointer = pointer.left;
        else return false;
      } else if (value > pointer.value) {
        if (pointer.right) pointer = pointer.right;
        else return false;
      } else {
        return true;
      }
    }
  }

  updateEachBFS(func) {
    // no root
    if (this.value === null) return false;
    // edge case -- no left or right
    if (this.value !== null && !this.left && !this.right) {
      this.value = func(this.value);
      return true;
    }

    const queue = new Queue();
    queue.enqueue(this);

    const recurse = () => {
      if (!queue.size()) return;
      const node = queue.dequeue();
      node.value = func(node.value);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
      recurse();
    };

    recurse();
    return true;
  }

  updateEachDFS(func, order = 'preOrder') {
    // no root
    if (this.value === null) return false;
    // edge case -- no left or right
    if (this.value !== null && !this.left && !this.right) {
      this.value = func(this.value);
      return true;
    }

    const recursePostOrder = node => {
      if (node.left) recursePostOrder(node.left);
      if (node.right) recursePostOrder(node.right);
      node.value = func(node.value);
    };

    const recurseInOrder = node => {
      if (node.left) recurseInOrder(node.left);
      node.value = func(node.value);
      if (node.right) recurseInOrder(node.right);
    };

    const recursePreOrder = node => {
      node.value = func(node.value);
      if (node.left) recursePreOrder(node.left);
      if (node.right) recursePreOrder(node.right);
    };

    if (order === 'postOrder') recursePostOrder(this);
    else if (order === 'inOrder') recurseInOrder(this);
    else recursePreOrder(this);

    return true;
  }

  filterBFS(filter) {
    // no root
    if (this.value === null) return false;
    // edge case -- no left or right
    if (this.value !== null && !this.left && !this.right) {
      if (filter(this.value)) return [ this.value ];
      else return [];
    }

    const queue = new Queue();
    queue.enqueue(this);
    const result = [];

    const recurse = () => {
      if (!queue.size()) return;
      const node = queue.dequeue();
      if (filter(node.value)) result.push(node.value);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
      recurse();
    };

    recurse();
    return result;
  }

  filterDFS(filter, order = 'preOrder') {
    // no root
    if (this.value === null) return false;
    // edge case -- no left or right
    if (this.value !== null && !this.left && !this.right) {
      if (filter(this.value)) return [ this.value ];
      else return [];
    }

    const result = [];

    const recursePostOrder = node => {
      if (node.left) recursePostOrder(node.left);
      if (node.right) recursePostOrder(node.right);
      if (filter(node.value)) result.push(node.value);
    };

    const recurseInOrder = node => {
      if (node.left) recurseInOrder(node.left);
      if (filter(node.value)) result.push(node.value);
      if (node.right) recurseInOrder(node.right);
    };

    const recursePreOrder = node => {
      if (filter(node.value)) result.push(node.value);
      if (node.left) recursePreOrder(node.left);
      if (node.right) recursePreOrder(node.right);
    };

    if (order === 'postOrder') recursePostOrder(this);
    else if (order === 'inOrder') recurseInOrder(this);
    else recursePreOrder(this);

    return result;
  }
}

export default BinarySearchTree;

/*

insertArray
removeBranch
removeNode --> detaches branch and adds back nodes after target
//updateEachBFS
//updateEachDFS
//filterBFS
//filterDFS
countNodes
balance

*/
