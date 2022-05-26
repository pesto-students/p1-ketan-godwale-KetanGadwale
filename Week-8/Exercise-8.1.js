//Maximum Depth of Binary Tree

class Node {
    constructor(val) {
        this.value = val;
        this.left = this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    addRoot(val) {
        this.root = new Node(val);
    }
}

const bTree = new BinaryTree();

bTree.addRoot(14);

console.log(bTree);
