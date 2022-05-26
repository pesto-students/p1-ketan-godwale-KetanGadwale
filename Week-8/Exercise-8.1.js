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

    add(val) {
        let temp = this.root;
        let newNode = new Node(val);
        while (true) {
            if (val < temp.value) {
                if (temp.left == null) {
                    temp.left = newNode;
                    return;
                }
                temp = temp.left;
            } else {
                if (temp.right == null) {
                    temp.right = newNode;
                    return;
                }
                temp = temp.right;
            }
        }
    }

    maxDepth() {}
}

const bTree = new BinaryTree();

bTree.addRoot(14);

bTree.add(8);
bTree.add(27);
bTree.add(3);
bTree.add(12);
console.log(bTree);
