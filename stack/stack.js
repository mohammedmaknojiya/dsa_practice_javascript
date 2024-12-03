// Stacks is a linear data structure
// We generally use stacks to perform operations like push, pop, and peek
// Stacks are not generally use for lookup operations and not for operations like insert element in between
// Stacks works on LIFO manner. Last In First Out
// Element are inserted and deleted from the top

// push O(1)
// pop O(1)
// peek O(1)
// lookup O(n) // which we generally don't use

// Stacks are very useful when u want to track the last item which was inserted
// eg: nested function calls like recursions or to maintain browser history for going back and froward or to perform undo actions

// Important points to understand

// Stack can be build with Arrays and Linked List

// If you use Linked List, then u have to maintain extra memory space for next pointer.
// Although Linked List is dynamic and can be useful when initial data size is not known

// If you use Arrays, then it is more efficient in terms of accessing elements
// Because arrays data are stored sequentially in memory as compare to Linked List where data is scattered all over the place
// But it stack size grows to more than its limit, then you have to double up the space and copy all previous data at new place

// So it depends on your use case what you want to use.

// But Stack using array is more faster and cleaner

class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
    console.log("Stack items after push", this.stack);
  }

  pop() {
    this.stack.pop();
    console.log("Stack items after pop", this.stack);
  }

  peek() {
    return this.stack.at(-1);
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

stack.pop();
stack.pop();

console.log("Stack peek item", stack.peek());
