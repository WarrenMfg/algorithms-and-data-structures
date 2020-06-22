import { expect } from 'chai';
import ES6Queue from './ES6Queue';
import PseudoclassicalQueue from './PseudoclassicalQueue';


const queues = [ES6Queue, PseudoclassicalQueue];

queues.forEach(Queue => {

  describe(Queue.name, () => {
    let queue;
    let size;
    let value;

    beforeEach(() => {
      queue = new Queue();
    });

    describe('Constructor', () => {
      it(`Returns an instance of ${Queue.name}`, () => {
        expect(queue).to.be.an.instanceOf(Queue);
        expect(queue).to.have.ownPropertyDescriptor('storage');
        expect(queue).to.have.ownPropertyDescriptor('head');
        expect(queue).to.have.ownPropertyDescriptor('tail');
        expect(queue).to.have.property('enqueue');
        expect(queue).to.have.property('dequeue');
        expect(queue).to.have.property('size');
      });
    });

    describe('Enqueue', () => {
      it('Enqueues into an empty queue', () => {
        size = queue.enqueue('hello');
        expect(size).to.equal(1);
        expect(queue.storage).to.eql({'0': 'hello'});
        expect(queue.head).to.equal(0);
        expect(queue.tail).to.equal(1);
      });

      it('Enqueues into a nonempty queue', () => {
        queue.enqueue('hello');
        queue.enqueue('world');
        size = queue.enqueue('!!!');
        expect(size).to.equal(3);
        expect(queue.storage).to.eql({
          '0': 'hello',
          '1': 'world',
          '2': '!!!'
        });
        expect(queue.head).to.equal(0);
        expect(queue.tail).to.equal(3);
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
        expect(queue.storage).to.eql({
          '1': 'world',
          '2': '!!!'
        });
        expect(queue.head).to.equal(1);
        expect(queue.tail).to.equal(3);
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
        expect(queue.storage).to.eql({});
        expect(queue.head).to.equal(3);
        expect(queue.tail).to.equal(3);
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

});