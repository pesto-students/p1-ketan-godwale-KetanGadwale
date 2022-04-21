//Implement a function named getNumber which generates a random number.
//If randomNumber is divisible by 5 it will reject the promise else it will resolve the promise. 
//Let’s also keep the promise resolution/rejection time as a variable.


function getNumber() {
    return Math.floor(Math.random() * 1000);
}


function Promise(resolve, reject) {
    let promise = { state: '<pending>' };
    let num = getNumber();
    if (num % 5 == 0) {
        resolve();
    }
    else {
        reject();
    }
}

