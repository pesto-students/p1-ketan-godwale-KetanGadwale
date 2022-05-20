class Queue {
    constructor() {
        this.frontStack = [];
        this.rearStack = [];
    }

    enQueue(item) {
        this.rearStack.push(item);
    }

    deQueue(item) {}

    print() {
        console.log([...this.frontStack, ...this.rearStack]);
    }
}

const queue = new Queue();

queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);

queue.print();
