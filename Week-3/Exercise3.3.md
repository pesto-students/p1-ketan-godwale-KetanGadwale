
//Code Snippet
function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();


Output :-> Count is 0


Explaination :->
Ideally the value of 'count' should have been persisted and output should have got as 'Count is 3'
Reason we did not get output as '3' is that 'increment' and 'log' functions should have invoked inside 'createIncrement' to make use of closure properly.

As 'increment' is called in Global Execution Context(GEC) instead of in 'createIncrement' Function Execution Context(FEC), each time 'count' if referred with vlaue '0' even when function 'log' was invoked. Hence we finally got 'count' as 0.
