//Implement Fibonacci Series with Iterators

const fibonacciSeriesIterator = {
    _first: 0,
    _second: 1,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        let temp = this._first;
        this._first = this._second;
        this._second = temp + this._first;
        return { value: this._first, done: false }
    }
}

console.log(fibonacciSeriesIterator.next().value)
console.log(fibonacciSeriesIterator.next().value)
console.log(fibonacciSeriesIterator.next().value)
console.log(fibonacciSeriesIterator.next().value)
console.log(fibonacciSeriesIterator.next().value)
console.log(fibonacciSeriesIterator.next().value)
console.log(fibonacciSeriesIterator.next().value)
console.log(fibonacciSeriesIterator.next().value)
