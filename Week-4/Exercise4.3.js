//Implement Fibonacci Series with Iterators

const fibonacciSeriesIterator = {
    _first: -1,
    _second: 0,
    result: 1,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        this._first = this._second;
        this._second = this.result;
        this.result = this._first + this._second;
        return { value: this.result, done: false }
    }
}

console.log(fibonacciSeriesIterator.next().value)
console.log(fibonacciSeriesIterator.next().value)
console.log(fibonacciSeriesIterator.next().value)
console.log(fibonacciSeriesIterator.next().value)
console.log(fibonacciSeriesIterator.next().value)
console.log(fibonacciSeriesIterator.next().value)
console.log(fibonacciSeriesIterator.next().value)
