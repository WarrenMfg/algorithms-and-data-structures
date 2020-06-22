import { expect } from 'chai';
import LinkedListStack from './LinkedListStack';


describe(LinkedListStack.name, () => {
  let stack;
  let count;
  let value;
  let size;

  beforeEach(() => {
    stack = new LinkedListStack();
  });

  describe('Constructor', () => {
    it(`Returns an instance of ${LinkedListStack.name}`, () => {
      expect(stack).to.be.an.instanceOf(LinkedListStack);
      expect(stack).to.have.ownPropertyDescriptor('head');
      expect(stack).to.have.ownPropertyDescriptor('tail');
      expect(stack).to.have.ownPropertyDescriptor('count');
      expect(stack).to.have.property('createNewNode');
      expect(stack).to.have.property('push');
      expect(stack).to.have.property('pop');
      expect(stack).to.have.property('size');
    });
  });

  describe('Push', () => {
    it('Pushes onto an empty stack', () => {
      expect(stack.count).to.equal(0);
      expect(stack.head).to.be.null;
      expect(stack.tail).to.be.null;
      count = stack.push('hello');
      expect(count).to.equal(1);
      expect(stack.count).to.equal(1);
      expect(stack.head).to.eql({value: 'hello', next: null});
      expect(stack.tail).to.eql({value: 'hello', next: null});
      expect(stack.head).to.equal(stack.tail);
    });

    it('Pushes onto a nonempty stack', () => {
      expect(stack.count).to.equal(0);
      expect(stack.head).to.be.null;
      expect(stack.tail).to.be.null;
      stack.push('hello');
      stack.push('world');
      count = stack.push('!!!');
      expect(count).to.equal(3);
      expect(stack.count).to.equal(3);
      expect(stack.head).to.eql({
        value: '!!!',
        next: {
          value: 'world',
          next: {
            value: 'hello',
            next: null
          }
        }
      });
      expect(stack.tail).to.eql({value: 'hello', next:  null});
    });
  });

  describe('Pop', () => {
    it('Returns null from an empty stack', () => {
      expect(stack.count).to.equal(0);
      expect(stack.head).to.be.null;
      expect(stack.tail).to.be.null;
      value = stack.pop();
      expect(value).to.be.null;
      expect(stack.count).to.equal(0);
      expect(stack.head).to.be.null;
      expect(stack.tail).to.be.null;
    });

    it('Returns last item pushed', () => {
      stack.push('hello');
      stack.push('world');
      stack.push('!!!');
      value = stack.pop();
      expect(value).to.equal('!!!');
      expect(stack.count).to.equal(2);
      expect(stack.head).to.eql({
        value: 'world',
        next: {
          value: 'hello',
          next: null
        }
      });
      expect(stack.tail).to.eql({
        value: 'hello',
        next: null
      });
    });

    it('Returns all items, then null', () => {
      stack.push('hello');
      stack.push('world');
      stack.push('!!!');
      value = stack.pop();
      expect(value).to.equal('!!!');
      value = stack.pop();
      expect(value).to.equal('world');
      value = stack.pop();
      expect(value).to.equal('hello');
      value = stack.pop();
      expect(value).to.be.null;
      expect(stack.count).to.equal(0);
      expect(stack.head).to.be.null;
      expect(stack.tail).to.be.null;
    });
  });

  describe('Size', () => {
    it('Returns count of empty stack', () => {
      size = stack.size();
      expect(size).to.equal(0);
    });

    it('Returns count of stack after pushing 3 items', () => {
      stack.push('hello');
      stack.push('world');
      stack.push('!!!');
      size = stack.size();
      expect(size).to.equal(3);
    });

    it('Returns count of stack after pushing 3 items then popping 1 item', () => {
      stack.push('hello');
      stack.push('world');
      stack.push('!!!');
      stack.pop();
      size = stack.size();
      expect(size).to.equal(2);
    });

    it('Returns count after pushing then popping 3 items', () => {
      stack.push('hello');
      stack.push('world');
      stack.push('!!!');
      stack.pop();
      stack.pop();
      stack.pop();
      size = stack.size();
      expect(size).to.equal(0);
    });
  });
});