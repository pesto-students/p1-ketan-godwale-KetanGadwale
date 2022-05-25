//Implement a Queue using 2 stack

class Queue {
    constructor() {
        this.frontStack = [];
        this.rearStack = [];
    }

    enQueue(item) {
        this.rearStack.push(item);
        return true;
    }

    deQueue(item) {
        if (this.frontStack.length == 0) {
            this.frontStack = this.rearStack;
            this.rearStack = [];
        }
        let result = this.frontStack[0];
        delete this.frontStack[0];
        return result;
    }

    print() {
        console.log([...this.frontStack, ...this.rearStack]);
    }
}

const queue = new Queue();

queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.deQueue();

queue.print();
