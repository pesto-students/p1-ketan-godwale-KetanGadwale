//Implement a Queue using 2 stack

class Queue {
    constructor() {
        this.frontStack = [];
        this.rearStack = [];
    }

    enQueue(item) {
        this.rearStack.push(item);
    }

    deQueue(item) {
        if (this.rearStack.length == 0 && this.frontStack.length == 0) {
            throw Error('Queue - underflow');
        } else if (this.frontStack.length == 0 && this.rearStack.length > 0) {
            while (this.rearStack.length != 0) {
                this.frontStack.push(this.rearStack.pop());
            }
            return this.frontStack.pop();
        } else {
            return this.frontStack.pop();
        }
    }

    print() {
        console.log([...this.frontStack.reverse(), ...this.rearStack]);
    }
}

const queue = new Queue();

queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
console.log(queue.deQueue());

queue.print();
