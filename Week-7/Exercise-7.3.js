class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(val) {
        let newNode = new Node(val);
        if (this.head == null) {
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }

        temp.next = newNode;
    }

    print() {
        let temp = this.head;
        while (temp != null) {
            if (temp.next != null) process.stdout.write(`${temp.data} -> `);
            else process.stdout.write(`${temp.data}`);
            temp = temp.next;
        }
        process.stdout.write('\n');
    }

    //add loop at xth node - index starts from 0
    addLoop(x) {
        let i = 0;
        let xthNode;
        let temp = this.head;
        while (temp.next != null) {
            if (i == x) {
                xthNode = temp;
            }
            temp = temp.next;
            i++;
        }
        temp.next = xthNode;
    }

    detectLoop() {
        let set = new Set();
        let temp = this.head;
        while (temp != null) {
            if (set.has(temp)) return true;
            set.add(temp);
            temp = temp.next;
        }
        return false;
    }
}

let linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.add(6);

linkedList.print();

// linkedList.addLoop(0);

console.log(linkedList.detectLoop());
