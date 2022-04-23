//Implement a function named getNumber which generates a random number.
//If randomNumber is divisible by 5 it will reject the promise else it will resolve the promise. 
//Let’s also keep the promise resolution/rejection time as a variable.

//get Random number between 1 to 1000
function getNumber() {
    return Math.floor(Math.random() * 1000);
}


//Promise polyfill
function MyPromise(computationFn) {

}


//main
let num = getNumber();

const promise = new MyPromise((resolve, reject) => {
    if (num % 5 == 0)
        reject(num);
    else
        resolve(num);
})

