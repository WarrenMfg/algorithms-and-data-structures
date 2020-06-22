import { expect } from 'chai';
import LinkedListQueue from './LinkedListQueue';


describe(LinkedListQueue.name, () => {
  let queue;
  let size;
  let value;

  beforeEach(() => {
    queue = new LinkedListQueue();
  });

  describe('Constructor', () => {
    it(`Returns an instance of ${LinkedListQueue.name}`, () => {
      expect(queue).to.be.an.instanceOf(LinkedListQueue);
      expect(queue).to.have.ownPropertyDescriptor('head');
      expect(queue).to.have.ownPropertyDescriptor('tail');
      expect(queue).to.have.ownPropertyDescriptor('length');
      expect(queue).to.have.property('createNewNode');
      expect(queue).to.have.property('enqueue');
      expect(queue).to.have.property('dequeue');
      expect(queue).to.have.property('size');
    });
  });

  describe('Enqueue', () => {
    it('Enqueues into an empty queue', () => {
      size = queue.enqueue('hello');
      expect(size).to.equal(1);
      expect(queue.head).to.eql({value: 'hello', next: null});
      expect(queue.head).to.equal(queue.tail);
      expect(queue.head).to.eql(queue.tail);
    });

    it('Enqueues into a nonempty queue', () => {
      queue.enqueue('hello');
      queue.enqueue('world');
      size = queue.enqueue('!!!');
      expect(size).to.equal(3);
      expect(queue.length).to.equal(3);
      expect(queue.head).to.eql({
        value: 'hello',
        next: {
          value: 'world',
          next: {
            value: '!!!',
            next: null
          }
        }
      });
      expect(queue.tail).to.eql({value: '!!!', next: null});
    });
  });

  describe('Dequeue', () => {
    it('Returns null from an empty queue', () => {
      value = queue.dequeue();
      expect(value).to.be.null;
    });

    it('Returns the first item enqueued', () => {
      queue.enqueue('hello');
      queue.enqueue('world');
      queue.enqueue('!!!');
      value = queue.dequeue();
      expect(value).to.equal('hello');
      expect(queue.head).to.eql({
        value: 'world',
        next: {
          value: '!!!',
          next: null
        }
      });
      expect(queue.tail).to.eql({value: '!!!', next: null});
      expect(queue.length).to.equal(2);
    });

    it('Returns all items, then null', () => {
      queue.enqueue('hello');
      queue.enqueue('world');
      queue.enqueue('!!!');
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      value = queue.dequeue();
      expect(value).to.be.null;
      expect(queue.length).to.equal(0);
      expect(queue.head).to.be.null;
      expect(queue.tail).to.be.null;
    });
  });

  describe('Size', () => {
    it('Returns size of empty queue', () => {
      size = queue.size();
      expect(size).to.equal(0);
    });

    it('Returns size of queue after enqueueing 3 items', () => {
      queue.enqueue('hello');
      queue.enqueue('world');
      queue.enqueue('!!!');
      size = queue.size();
      expect(size).to.equal(3);
    });

    it('Returns size of queue after enqueueing 3 items then dequeueing 1 item', () => {
      queue.enqueue('hello');
      queue.enqueue('world');
      queue.enqueue('!!!');
      queue.dequeue();
      size = queue.size();
      expect(size).to.equal(2);
    });

    it('Returns size after enqueueing then dequeueing 3 items', () => {
      queue.enqueue('hello');
      queue.enqueue('world');
      queue.enqueue('!!!');
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      size = queue.size();
      expect(size).to.equal(0);
    });
  });

});