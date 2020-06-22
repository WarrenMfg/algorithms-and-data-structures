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

}

export default BinarySearchTree;