let head;

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(head) {
        this.head = null;
    }

    add(val) {
        let newNode = new Node(val);
        if (this.head == null) {
            this.head = newNode;
            return;
        }

        let temp = this.head;
        while (temp.next != null) temp = temp.next;

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

    reverse() {
        let previous = null;
        let current = this.head;
        let next = null;
        while (current != null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
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

linkedList.reverse();

linkedList.print();
