class IncreasingCounter {
    _count = 0;

    get value() {
        console.log('Getting the current value!');
        return this._count;
    }

    increment() {
        this._count++;
    }
}

const foo = new IncreasingCounter()

foo.value