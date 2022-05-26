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
        return this.root;
    }

    add(val) {
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

    static maxDepth(node) {
        if (node == null) return -1;
        else {
            let leftDepth = BinaryTree.maxDepth(node.left);
            let rightDepth = BinaryTree.maxDepth(node.right);

            if (leftDepth > rightDepth) return leftDepth + 1;
            return rightDepth + 1;
        }
    }
}

const bTree = new BinaryTree();

let root = bTree.addRoot(14);

bTree.add(8);
bTree.add(27);
bTree.add(3);
bTree.add(12);
// console.log(bTree);

console.log(BinaryTree.maxDepth(root));
