//Refactor the above stack implementation, using the concept of closure, 
//such that there is noway to access items array outside of createStack() function scope: (2-3 hours)
function createStack() {
    return {
        items: [],
        push(item) { this.items.push(item); },
        pop() {
            return this.items.pop();
        }
    };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.items;// => [10]
console.log(stack.items);
stack.items = [10, 100, 1000];// Encapsulationbroken!
console.log(stack.items);


// functioncreateStack() {
//     // Write your code here...
// }
// conststack = createStack();
// stack.push(10);
// stack.push(5);
// stack.pop();// => 5
// stack.items;// => undefined
