//Implement a function named getNumber which generates a random number.
//If randomNumber is divisible by 5 it will reject the promise else it will resolve the promise.
//Let’s also keep the promise resolution/rejection time as a variable.

//get Random number between 1 to 1000
function getNumber() {
    return Math.floor(Math.random() * 1000);
}

//states object
const STATE = {
    PENDING: "<pending>",
    FULFILLED: "<fulfilled>",
    REJECTED: "<rejected>",
};

//Promise polyfill
function MyPromise(computationFn) {
    let currentPromise = {
        state: STATE.PENDING,
    };
    let thenSuccessCallback, thenRejectCallback;

    computationFn(
        //resolveHandler
        (value) => {
            if (currentPromise.state == STATE.PENDING) {
                currentPromise.state = STATE.FULFILLED;
                currentPromise.value = value;
            }
            setTimeout(() => {
                thenSuccessCallback && thenSuccessCallback(value);
            });
        },
        //rejectHandler
        (reason) => {
            if (currentPromise.state == STATE.PENDING) {
                currentPromise.state = STATE.REJECTED;
                currentPromise.reason = reason;
            }
            setTimeout(() => {
                thenRejectCallback && thenRejectCallback(reason);
            });
        }
    );

    //then
    Object.defineProperty(currentPromise, "then", {
        writable: false,
        enumerable: false,
        configurable: false,
        value: function (successCallback, rejectCallback) {
            thenSuccessCallback = successCallback;
            thenRejectCallback = rejectCallback;
            return new MyPromise((resolve, reject) => {
                currentPromise.value && resolve(currentPromise.value);
                currentPromise.reason && reject(currentPromise.reason);
            });
        },
    });

    //catch : this is similar to then with only rejectCallback and runs when promise is rejected
    Object.defineProperty(currentPromise, "catch", {
        writable: false,
        enumerable: false,
        configurable: false,
        value: function (rejectCallback) {
            thenRejectCallback = rejectCallback;
            return new MyPromise((resolve, reject) => {
                currentPromise.value && resolve(currentPromise.value);
                currentPromise.reason && reject(currentPromise.reason);
            });
        },
    });
    return currentPromise;
}

//main
let num = getNumber();

const promise = new MyPromise((resolve, reject) => {
    if (num % 5 == 0) reject(num);
    else resolve(num);
})
    .then(
        (value) =>
            console.log(
                `Number ${value} NOT divisible by five - promise resolved!`
            ),
        (reason) =>
            console.log(
                `Number ${reason} divisible by five - promise rejected!`
            )
    )
    .then((data) => console.log("settled!!! with", data))
    .then(() => console.log("when rejected - should not be printed"))
    .catch((err) => console.log("error - rejected due to", err))
    .then(() => console.log("then after catch"));

console.log(promise);
