//Implement Fibonacci Series with Iterators

const fibonacciSeriesIterator = {
    _first: 0,
    _second: 1,
    //default length
    _length: 10,
    _runCount: 0,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        let temp = this._first;
        this._first = this._second;
        this._second = temp + this._first;
        return { value: this._first, done: !(this._runCount++ < this._length) }
    },
    //added to work without infinite for _ of loop
    setLength(len) {
        this._length = len;
    }
}

//setting iterator length
fibonacciSeriesIterator.setLength(15);

for (let i of fibonacciSeriesIterator) {
    console.log(i);
}
