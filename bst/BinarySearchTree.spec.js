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
