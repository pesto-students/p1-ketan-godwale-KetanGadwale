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


 * Output :-> Count is 0 * 


* Explaination :-> *
Reason for output is 'message' variable is only set once with the initial value of 'count' as 0 when 'createIncrement' is invoked.
After three 'increment' invocation, count is '3' but log is console-ing 'message' which is 'Count is 0'.
Hence final output is 'Count is 0'.
