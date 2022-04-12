//Exercise 3.3 - What is the output of the below problem and why: <br/>
//Code Snippet <br/>
function createIncrement() { <br/>
    let count = 0; <br/>
    function increment() { <br/>
        count++; <br/>
    } <br/>
    let message = `Count is ${count}`; <br/>
    function log() { <br/>
        console.log(message); <br/>
    } <br/>
    return [increment, log]; <br/>
} <br/>
const [increment, log] = createIncrement(); <br/>
increment(); <br/>
increment(); <br/>
increment(); <br/>
log(); <br/>


Output :-> Count is 0


Explaination :->
Ideally the value of 'count' should have been persisted and output should have got as 'Count is 3'
Reason we did not get output as '3' is that 'increment' and 'log' functions should have invoked inside 'createIncrement' to make use of closure properly.

As 'increment' is called in Global Execution Context(GEC) instead of in 'createIncrement' Function Execution Context(FEC), each time 'count' if referred with vlaue '0' even when function 'log' was invoked. Hence we finally got 'count' as 0.
