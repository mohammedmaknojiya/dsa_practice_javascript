class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.head === null && this.tail === null;
  }

  appendNode(value) {
    const newNode = new Node(value);

    // If it is first node
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    this.printList("Append Node");
  }

  // append at the start
  prependNode(value) {
    const newNode = new Node(value);

    // if it is first node
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    this.printList("Prepend Node");
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
    const newNode = new Node(value);

    if (index + 1 >= this.length) {
      this.appendNode(value);
      return;
    }

    const leaderNode = this.traverseToIndex(index - 1);
    newNode.next = leaderNode.next;
    leaderNode.next = newNode;

    this.length++;

    this.printList("Insert Node");
  }

  printList(operationPerformed) {
    const nodeList = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      nodeList.push(currentNode.value);
      currentNode = currentNode.next;
    }

    const formattedNodesList = nodeList.join("---->");
    console.log("Linked List Nodes", operationPerformed, formattedNodesList);
  }

  remove(index) {
    const leaderNode = this.traverseToIndex(index - 1);
    const unwantedNode = leaderNode.next;
    leaderNode.next = unwantedNode.next;
    unwantedNode.next = null;
    this.length--;

    this.printList("Remove Node");
  }

  reverse() {
    let first = this.head;
    let second = this.head.next;

    while (second !== null) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.tail = this.head;
    this.tail.next = null;

    this.head = first;

    this.printList("Reverse");
  }
}

const linkedList = new LinkedList();

linkedList.appendNode(1);
linkedList.appendNode(2);
linkedList.appendNode(3);
linkedList.appendNode(4);
linkedList.appendNode(5);

linkedList.prependNode(6);
linkedList.prependNode(7);
linkedList.prependNode(8);

linkedList.insert(2, 11);
linkedList.insert(9, 12);
linkedList.insert(100, 13);

linkedList.remove(6);

linkedList.reverse();
