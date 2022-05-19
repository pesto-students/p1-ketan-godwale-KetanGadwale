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

    rotate(n) {
        let i = 0;
        let arr = [];
        let temp = this.head;

        while (i < n && temp.next != null) {
            arr.push(temp.data);
            temp = temp.next;
            i++;
        }
        this.head = temp;
        for (let i = 0; i < arr.length; i++) {
            this.add(arr[i]);
        }
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

linkedList.rotate(2);

linkedList.print();
