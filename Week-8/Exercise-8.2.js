//Validate a Binary Tree

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    addRoot(val) {
        this.root = new Node(val);
        return this.root;
    }

    addNode(val) {
        let temp = this.root;
        let newNode = new Node(val);
        while (true) {
            if (val < temp.value) {
                if (temp.left == null) {
                    temp.left = newNode;
                    return newNode;
                }
                temp = temp.left;
            } else {
                if (temp.right == null) {
                    temp.right = newNode;
                    return newNode;
                }
                temp = temp.right;
            }
        }
    }

    static isBinaryTree(node) {}
}

let tree = new Tree();

let root = tree.addRoot(5);
tree.addNode(1);
tree.addNode(6);
tree.addNode(4);
tree.addNode(0);

console.log(tree);

console.log(Tree.isBinaryTree(root));
