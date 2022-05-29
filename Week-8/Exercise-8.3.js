//Binary Tree Level Order Traversal
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
        let node = this.root;
        let newNode = new Node(val);
        while (true) {
            if (val < temp.value) {
                if (temp.left != null) {
                    temp.left = newNode;
                    return newNode;
                }
                temp = temp.left;
            } else {
                if (temp.right != null) {
                    temp.right = newNode;
                    return newNode;
                }
                temp = temp.right;
            }
        }
    }
}
