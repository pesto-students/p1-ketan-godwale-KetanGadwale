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

    static isValidBST(root) {
        //in-order traversal should be an sorted array for the tree to be a valid BST
        let arr = [];

        const inorder = (root) => {
            if (root != null) {
                inorder(root.left);
                arr.push(root.value);
                inorder(root.right);
            }
        };

        const isSorted = (arr) => {
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) return false;
            }
            return true;
        };

        inorder(root);
        return isSorted(arr);
    }
}

let tree = new Tree();

let root = new Node(12);
root.left = new Node(13);
root.right = new Node(18);

console.log(Tree.isValidBST(root));
