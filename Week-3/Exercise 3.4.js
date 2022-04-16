//Refactor the above stack implementation, using the concept of closure,
//such that there is noway to access items array outside of createStack() function scope: (2-3 hours)
// function createStack() {
//     return {
//         items: [],
//         push(item) { this.items.push(item); },
//         pop() {
//             return this.items.pop();
//         }
//     };
// }

// const stack = createStack();
// stack.push(10);
// stack.push(5);
// stack.pop();// => 5
// stack.items;// => [10]
// stack.items = [10, 100, 1000];// Encapsulationbroken!


function createStack() {
    // Write your code here...
    const items = [];
    return (function () {
        return {
            push(item) {
                items.push(item);
            },
            pop() {
                return items.pop();
            },
            //for testing only
            print() {
                return items;
            }
        }
    })();
}
const stack = createStack();
stack.push(10); // => items : [10]
stack.push(5); // => items : [10, 5]
stack.pop(); // => 5 // => items : [10]
stack.items; // => undefined //use console.log for testing
stack.items = [10, 100, 1000]; //Adds 'items' property to 'stack' object but original 'items' remains untouched.
console.log(stack.print()); // => items : [10] not [10, 100, 1000]

