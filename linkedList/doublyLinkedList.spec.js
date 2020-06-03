import { expect } from 'chai';
import { Node, DoublyLinkedList } from './doublyLinkedList';

describe('Doubly Linked List', () => {
  let expected;
  let list;
  let length;
  let areEqual;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  describe('Constructors', () => {
    it('Node constructor returns a new instance', () => {
      const value = 10;
      expected = {
        value,
        next: null,
        prev: null
      };
      const newNode = new Node(value);
      expect(newNode).to.deep.equal(expected);
    });

    it('DoublyLinkedList constructor returns a new instance', () => {
      expected = {
        head: null,
        tail: null,
        length: 0
      };
      expect(list).to.deep.equal(expected);
    });
  });

  describe('Push', () => {
    it('Pushes a new node into empty list', () => {
      length = list.push(10);
      expect(list.head.value).to.equal(10);
      expect(list.tail.value).to.equal(10);
      expect(list.length).to.equal(1);
      expect(length).to.equal(1);
      areEqual = list.head === list.tail;
      expect(areEqual).to.be.true;
    });

    it('Pushes a new node into nonempty list', () => {
      list.push(10);
      length = list.push(20);
      expect(list.head.value).to.equal(10);
      expect(list.tail.value).to.equal(20);
      expect(list.length).to.equal(2);
      expect(length).to.equal(2);
      areEqual = list.head === list.tail;
      expect(areEqual).to.be.false;
      expect(list.head.prev).to.be.null;
      expect(list.tail.next).to.be.null;
    });
  });

  describe('Pop', () => {
    it('Returns undefined for an empty list', () => {
      expect(list.pop()).to.be.undefined;
    });

    it('Returns popped value of a one item list and resets instance to empty list', () => {
      list.push(10);
      expect(list.pop()).to.equal(10);
      expect(list.head).to.be.null;
      expect(list.tail).to.be.null;
      expect(list.length).to.equal(0);
    });

    it('Returns popped value of a multi-item list', () => {
      pushItems(list);
      expect(list.head.value).to.equal(10);
      expect(list.length).to.equal(5);
      expect(list.tail.value).to.equal(50);
      expect(list.pop()).to.equal(50);
      expect(list.length).to.equal(4);
      expect(list.tail.value).to.equal(40);
      expect(list.head.value).to.equal(10);
    });
  });

  describe('Shift', () => {
    it('Returns undefined for an empty list', () => {
      expect(list.shift()).to.be.undefined;
    });

    it('Returns shifted value of a one item list and resets instance to empty list', () => {
      list.push(10);
      expect(list.shift()).to.equal(10);
      expect(list.head).to.be.null;
      expect(list.tail).to.be.null;
      expect(list.length).to.equal(0);
    });

    it('Returns shifted value of a multi-item list and reassigns head to next item', () => {
      pushItems(list);
      expect(list.head.value).to.equal(10);
      expect(list.length).to.equal(5);
      expect(list.tail.value).to.equal(50);
      expect(list.shift()).to.equal(10);
      expect(list.length).to.equal(4);
      expect(list.tail.value).to.equal(50);
      expect(list.head.value).to.equal(20);
      expect(list.head.prev).to.be.null;
    });
  });

  describe('Unshift', () => {
    it('Unshifts a new node into empty list', () => {
      length = list.unshift(10);
      expect(list.head.value).to.equal(10);
      expect(list.tail.value).to.equal(10);
      expect(list.length).to.equal(1);
      expect(length).to.equal(1);
      areEqual = list.head === list.tail;
      expect(areEqual).to.be.true;
    });

    it('Unshifts a new node into nonempty list', () => {
      list.unshift(10);
      length = list.unshift(20);
      expect(list.head.value).to.equal(20);
      expect(list.tail.value).to.equal(10);
      expect(list.length).to.equal(2);
      expect(length).to.equal(2);
      areEqual = list.head === list.tail;
      expect(areEqual).to.be.false;
      expect(list.head.prev).to.be.null;
      expect(list.tail.next).to.be.null;
    });
  });

  describe('Get', () => {
    it('Returns undefined for indices outside its scope', () => {
      expect(list.get(-1)).to.be.undefined;
      expect(list.get(0)).to.be.undefined;
      expect(list.get(1)).to.be.undefined;
      list.push(10);
      expect(list.get(-1)).to.be.undefined;
      expect(list.get(1)).to.be.undefined;
    });

    it('Returns the value for indices inside its scope', () => {
      pushItems(list);
      for (let i = 0; i < list.length; i++) {
        expect(list.get(i, false)).to.equal((i + 1) * 10);
      }
    });
  });

  describe('Set', () => {
    it('Returns false for indices outside its scope', () => {
      expect(list.set(-1)).to.be.false;
      expect(list.set(0)).to.be.false;
      expect(list.set(1)).to.be.false;
      list.push(10);
      expect(list.set(-1)).to.be.false;
      expect(list.set(1)).to.be.false;
    });

    it ('Sets items and returns true for indices inside its scope', () => {
      pushItems(list);
      for (let i = 0; i < list.length; i++) {
        expect(list.set(i, i)).to.be.true;
      }
      for (let i = 0; i < list.length; i++) {
        expect(list.get(i, false)).to.equal(i);
      }
    });
  });

  describe('Insert', () => {
    it('Returns undefined for indices outside its scope', () => {
      expect(list.insert(-1)).to.be.undefined;
      expect(list.insert(2)).to.be.undefined;
      list.push(10);
      expect(list.insert(-1)).to.be.undefined;
      expect(list.insert(2)).to.be.undefined;
    });

    it('Returns length when index === 0 and index === this.length', () => {
      length = list.insert(0, 10);
      expect(length).to.equal(1);
      length = list.insert(1, 20);
      expect(length).to.equal(2);
    });

    it('Returns length when inserting in the middle of the list', () => {
      pushItems(list);
      list.insert(2, 200);
      expect(list.length).to.equal(6);

      for (let i = 0; i < list.length; i++) {
        const value = list.get(i, false);
        if (i < 2) expect(value).to.equal((i + 1) * 10);
        else if (i === 2) expect(value).to.equal(200);
        else expect(value).to.equal(i * 10);
      }
    });
  });

  describe('Remove', () => {
    it('Returns undefined for indices outside its scope', () => {
      expect(list.remove(-1)).to.be.undefined;
      expect(list.remove(2)).to.be.undefined;
      list.push(10);
      expect(list.remove(-1)).to.be.undefined;
      expect(list.remove(2)).to.be.undefined;
    });

    it('Returns a node\'s value when removed from the beginning and end of the list', () => {
      pushItems(list);
      expect(list.length).to.equal(5);
      expect(list.remove(0)).to.equal(10);
      expect(list.length).to.equal(4);
      expect(list.remove(list.length - 1)).to.equal(50);
      expect(list.length).to.equal(3);
    });

    it('Returns a node\'s value when removed from the middle of the list', () => {
      pushItems(list);
      expect(list.length).to.equal(5);
      expect(list.remove(2)).to.equal(30);
      expect(list.length).to.equal(4);
      expect(list.remove(2)).to.equal(40);
      expect(list.length).to.equal(3);
      for (let i = 0; i < list.length; i++) {
        const remaining = [10, 20, 50];
        expect(list.get(i, false)).to.equal(remaining[i]);
      }
    });
  });

  describe('Reverse', () => {
    it('Returns null on an empty list', () => {
      expect(list.reverse()).to.be.null;
    });

    it('Returns the same node on a list of length 1', () => {
      list.push(10);
      expect(list.head).to.equal(list.tail);
      list.reverse();
      expect(list.head).to.equal(list.tail);
    });

    it('Reverses a list and returns the new head/old tail', () => {
      pushItems(list);
      const oldHead = list.get(0);
      const oldTail = list.get(list.length - 1);
      const newHead = list.reverse();
      expect(newHead).to.equal(oldTail);
      expect(list.head).to.equal(oldTail);
      expect(list.tail).to.equal(oldHead);
      for (let i = 0; i < list.length; i++) {
        const newOrder = [50,40,30,20,10];
        expect(list.get(i, false)).to.equal(newOrder[i]);
      }
    });
  });
});

function pushItems(list) {
  for (let i = 10; i <= 50; i += 10) {
    list.push(i);
  }
}