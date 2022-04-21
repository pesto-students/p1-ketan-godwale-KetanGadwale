//Implement Fibonacci Series with Iterators

const fibonacciSeriesIterator = {
    _first: -1,
    _second: 0,
    _third: 1,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        this._first = this._second;
        this._second = this._third;
        this._third = this._first + this._second;
        return { value: this._second, done: false }
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
