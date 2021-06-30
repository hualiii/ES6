function mySetInterVal(fn, a, b) {
    this.a = a;
    this.b = b;
    this.time = 0;
    this.handle = -1;
    this.start = () => {
        this.handle = setTimeout(() => {
            fn();
            this.time++;
            this.start();
        }, this.a + this.time * this.b)
    };
    this.stop = () => {
        clearTimeout(this.handle);
        this.time = 0;
    }
}

function log() {
    console.log("hello world");
}

let a = new mySetInterVal(log, 1000, 1000);

a.start();

a.stop();