class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.head === null && this.tail === null;
  }

  printList(operationPerformed) {
    const nodeList = [];

    let currentNode = this.head;

    while (currentNode !== null) {
      nodeList.push(currentNode.value);
      currentNode = currentNode.next;
    }

    const formattedNodesList = nodeList.join("<====>");
    console.log(
      `Node List after ${operationPerformed} operation: ${formattedNodesList}`
    );
  }

  append(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    this.printList("Append");
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;

    this.printList("Prepend");
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    let currentNodeIndex = 0;

    while (currentNodeIndex !== index) {
      currentNode = currentNode.next;
      currentNodeIndex++;
    }

    return currentNode;
  }

  insert(index, value) {
    if (index + 1 > this.length) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);

    const leaderNode = this.traverseToIndex(index - 1);
    const follower = leaderNode.next;
    newNode.next = follower;
    newNode.prev = leaderNode;
    leaderNode.next = newNode;
    follower.prev = newNode;

    this.length++;

    this.printList("Insert");
  }

  remove(index) {
    const leaderNode = this.traverseToIndex(index - 1);
    const unwantedNode = leaderNode.next;
    const follower = unwantedNode.next;

    leaderNode.next = follower;
    follower.prev = leaderNode;

    unwantedNode.next = null;
    unwantedNode.prev = null;

    this.length--;

    this.printList("Remove");
  }
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);
doublyLinkedList.append(4);
doublyLinkedList.append(5);

doublyLinkedList.prepend(6);
doublyLinkedList.prepend(7);

doublyLinkedList.insert(2, 10);

doublyLinkedList.remove(3);
