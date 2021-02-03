var g = function* () {
    try {
        yield;
    } catch (e) {
        console.log(e);
    }
};

var i = g();
i.next();
i.throw(new Error('出错了！'));
// Error: 出错了！(…)