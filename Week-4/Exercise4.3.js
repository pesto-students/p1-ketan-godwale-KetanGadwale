//Implement Fibonacci Series with Iterators

const fibonacciSeriesIterator = {
    _first: 0,
    _second: 1,
    result: 1,
    [Symbol.iterator]() {
        return this;
    },
    next() {

    }
}