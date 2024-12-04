class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Go to left
          if (currentNode.left !== null) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            return; // exit from loop after inserting node
          }
        } else {
          // Go to right if greater or equal value
          if (currentNode.right !== null) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            return; // exit from loop after inserting node
          }
        }
      }
    }
  }

  lookup(value) {
    let currentNode = this.root;

    if (this.isEmpty()) {
      return false;
    }

    while (currentNode !== null) {
      if (value === currentNode.value) {
        return currentNode;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }

    return false;
  }
}

const bst = new BinarySearchTree();

bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);

const formattedBST = JSON.stringify(bst);
console.log("BST:", formattedBST);

const node20 = bst.lookup(20);
const node175 = bst.lookup(175);

console.log("Node 20", node20);
console.log("Node 175", node175);
