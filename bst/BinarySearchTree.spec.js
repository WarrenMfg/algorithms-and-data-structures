import Queue from '../queue/ES6Queue';
import BinarySearchTree from './BinarySearchTree';
import { expect } from 'chai';

describe('Binary Search Tree', () => {
  let bst;
  let node;
  let result;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  describe('Constructor', () => {
    it(`Returns an instance of ${BinarySearchTree.name}`, () => {
      expect(bst).to.be.an.instanceOf(BinarySearchTree);
      expect(bst).to.have.ownPropertyDescriptor('value');
      expect(bst).to.have.ownPropertyDescriptor('left');
      expect(bst).to.have.ownPropertyDescriptor('right');
      expect(bst).to.have.property('createNewNode');
      expect(bst).to.have.property('insert');
      expect(bst).to.have.property('contains');
      expect(bst).to.have.property('updateEachBFS');
      expect(bst).to.have.property('updateEachDFSPreOrder');
      expect(bst).to.have.property('filterBFS');
      expect(bst).to.have.property('filterDFSPreOrder');
    });
  });

  describe('createNewNode', () => {
    it('Returns a new node with value, left, and right properties', () => {
      node = bst.createNewNode(null);
      expect(node).to.eql({
        value: null,
        left: null,
        right: null
      });
    });
  });

  describe('insert', () => {
    it('Returns false when no argument is passed in', () => {
      result = bst.insert();
      expect(result).to.be.false;
    });

    it('Inserts a root on a tree with no root', () => {
      result = bst.insert(10);
      expect(result).to.be.true;
      expect(bst.value).to.equal(10);
      expect(bst.left).to.be.null;
      expect(bst.right).to.be.null;
    });

    it('Inserts nodes appropriately on a tree with a root', () => {
      insertNodes(bst);
      expect(bst.value).to.equal(10);
      expect(bst.left).to.eql({
        value: 5,
        left: {
          value: 4,
          left: null,
          right: null
        },
        right: {
          value: 6,
          left: null,
          right: null
        }
      });
      expect(bst.right).to.eql({
        value: 15,
        left: {
          value: 14,
          left: null,
          right: null
        },
        right: {
          value: 16,
          left: null,
          right: null
        }
      });
    });
  });

  describe('contains', () => {
    it('Returns false when no argument is passed in', () => {
      result = bst.contains();
      expect(result).to.be.false;
    });

    it('Returns false when there is no root', () => {
      result = bst.contains(10);
      expect(result).to.be.false;
    });

    it('Returns true when argument equals root', () => {
      insertNodes(bst);
      result = bst.contains(10);
      expect(result).to.be.true;
    });

    it('Returns true for all nodes in tree', () => {
      insertNodes(bst);
      [ 10, 5, 4, 6, 15, 14, 16 ].forEach(value => {
        result = bst.contains(value);
        expect(result).to.be.true;
      });
    });

    it('Returns false for nodes not in a tree', () => {
      insertNodes(bst);
      [ 11, 3, 7, 20, 19, 21 ].forEach(value => {
        result = bst.contains(value);
        expect(result).to.be.false;
      });
    });
  });

  describe('updateEachBFS', () => {
    // update function
    const double = value => value * 2;

    it('Returns false when there is no root', () => {
      result = bst.updateEachBFS(double);
      expect(result).to.be.false;
    });

    it('Returns true when root is only node', () => {
      bst.insert(10);
      result = bst.updateEachBFS(double);
      expect(result).to.be.true;
      expect(bst.value).to.equal(20);
    });

    it('Returns true after updating each node', () => {
      insertNodes(bst);
      result = bst.updateEachBFS(double);
      expect(result).to.be.true;
      [ 20, 10, 8, 12, 30, 28, 32 ].forEach(value => {
        result = bst.contains(value);
        expect(result).to.be.true;
      });
    });
  });
});

function insertNodes(bst) {
  bst.insert(10);
  bst.insert(5);
  bst.insert(4);
  bst.insert(6);
  bst.insert(15);
  bst.insert(14);
  bst.insert(16);
}