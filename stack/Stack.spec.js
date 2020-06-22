import { expect } from 'chai';
import ES6Stack from './ES6Stack';
import PseudoclassicalStack from './PseudoclassicalStack';


const stacks = [ES6Stack, PseudoclassicalStack];

stacks.forEach(Stack => {

  describe(Stack.name, () => {
    let stack;
    let count;
    let value;
    let size;

    beforeEach(() => {
      stack = new Stack();
    });

    describe('Constructor', () => {
      it(`Returns an instance of ${Stack.name}`, () => {
        expect(stack).to.be.an.instanceOf(Stack);
        expect(stack).to.have.ownPropertyDescriptor('storage');
        expect(stack).to.have.ownPropertyDescriptor('count');
        expect(stack).to.have.property('push');
        expect(stack).to.have.property('pop');
        expect(stack).to.have.property('size');
      });
    });

    describe('Push', () => {
      it('Pushes onto an empty stack', () => {
        expect(stack.count).to.equal(0);
        expect(stack.storage).to.eql({});
        count = stack.push('hello');
        expect(count).to.equal(1);
        expect(stack.count).to.equal(1);
        expect(stack.storage).to.eql({'0': 'hello'});
      });

      it('Pushes onto a nonempty stack', () => {
        expect(stack.count).to.equal(0);
        expect(stack.storage).to.eql({});
        stack.push('hello');
        stack.push('world');
        count = stack.push('!!!');
        expect(count).to.equal(3);
        expect(stack.count).to.equal(3);
        expect(stack.storage).to.eql({
          '0': 'hello',
          '1': 'world',
          '2': '!!!'
        });
      });
    });

    describe('Pop', () => {
      it('Returns null from an empty stack', () => {
        expect(stack.count).to.equal(0);
        expect(stack.storage).to.eql({});
        value = stack.pop();
        expect(value).to.be.null;
        expect(stack.count).to.equal(0);
        expect(stack.storage).to.eql({});
      });

      it('Returns last item pushed', () => {
        stack.push('hello');
        stack.push('world');
        stack.push('!!!');
        value = stack.pop();
        expect(value).to.equal('!!!');
        expect(stack.count).to.equal(2);
        expect(stack.storage).to.eql({
          '0': 'hello',
          '1': 'world'
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
        expect(stack.storage).to.eql({});
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

});
