function findX(callback) {
    let x = Math.floor(Math.random() * 100);
    if (x < 90) {
        setTimeout(() => {
            callback(null, x);
        }, 1000)
    } else {
        setTimeout(() => {
            callback(new Error(), x);
        }, 500)
    }
}

// 基本调用
findX(function (error, x) {
    if (error) {
        console.log("notFind");
    } else {
        console.log("fond x is " + x);
    }
})

// 链式回调
findX(function (error, x) {
    if (error) {
        console.log("notFind");
    } else {
        console.log("fond x is " + x);
        findX(function (error, x) {
            if (error) {
                console.log("notFind");
            } else {
                console.log("fond x is " + x);
                findX(function (error, x) {
                    if (error) {
                        console.log("notFind");
                    } else {
                        console.log("fond x is " + x);
                        console.log("you win");
                    }
                })
            }
        })
    }
})

// 分步调用
findX(step1);

function step1(error, x) {
    if (error) {
        console.log("not find");
    } else {
        console.log("find x is " + x);
        findX(step2)
    }
}
function step2(error, x) {
    if (error) {
        console.log("not find");
    } else {
        console.log("find x is " + x);
        findX(step3)
    }
}
function step3(error, x) {
    if (error) {
        console.log("not find");
    } else {
        console.log("find x is " + x);
        console.log("you win");
    }
}