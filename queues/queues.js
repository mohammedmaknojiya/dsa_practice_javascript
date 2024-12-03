// Queues are linear data structure
// They work on FIFO manner. First In First Out
// The operations which we perform on the queue are:

// enqueue O(1) -> Inserting element in queue at the end
// dequeue O(1) -> Deleting element in queue from the start
// peek O(1) -> Accessing first element which will be picked by dequeue operation
// lookup O(n) -> Which we generally don't perform

// Eg: Queues are use in browser to maintain event queues. The events are called one by one from event queue
// Another common example is printer. Where if we have multiple computers and we are trying to print multiple documents then those order is maintain inside queue and printed one by one

// Important points to keep in mind

// Queues can be built using Arrays and Linked List

// If you use Arrays for implementing linked list then the operation which we perform on Queue are

// enqueue === push operation of array O(1) time
// dequeue === unshift operation of array O(n) time (because u need to shift all the other element to left because u are removing item at index 0)

// Hence arrays are not good for implementing Queues because of O(n) for dequeue operation

// If we use Linked List then

// enqueue -> Inserting at the end of Linked List -> O(1)
// dequeue -> Removing from the start of Linked List -> O(1)

// Hence Linked List looks good for implementing queues because both operations have O(1) time

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  isEmpty() {
    return this.front === null && this.rear === null;
  }

  printQueue(operationPerformed) {
    const nodeList = [];

    let currentNode = this.front;

    while (currentNode !== null) {
      nodeList.push(currentNode.value);
      currentNode = currentNode.next;
    }

    const formattedNodesList = nodeList.join("---->");
    console.log(
      `Queue after ${operationPerformed} operation: ${formattedNodesList}`
    );
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    this.length++;

    this.printQueue("Enqueue");
  }

  dequeue() {
    const unwantedNode = this.front;
    this.front = unwantedNode.next;
    unwantedNode.next = null;
    this.length--;

    this.printQueue("Dequeue");
  }

  peek() {
    console.log("Peek element:", this.front);
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

queue.dequeue();
queue.dequeue();

queue.peek();
