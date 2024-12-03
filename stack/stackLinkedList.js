class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.length = 0;
    this.top = null;
    this.bottom = null;
  }

  isEmpty() {
    return this.top === null && this.bottom === null;
  }

  printStack() {
    const stack = [];
    let currentNode = this.top;
    while (currentNode) {
      stack.push(currentNode.value);
      currentNode = currentNode.next;
    }

    const formattedStack = stack.join("---->");
    console.log(formattedStack);
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;

    this.printStack();
  }

  pop() {
    const unwantedNode = this.top;
    this.top = unwantedNode.next;
    unwantedNode.next = null;
    this.length--;

    this.printStack();
  }

  peek() {
    return this.top;
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
