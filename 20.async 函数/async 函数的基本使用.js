function setTimeOut(ms) {
    return new Promise(((resolve) => {
        setTimeout(resolve, ms)
    }))
}

async function asyncFunc(value, ms) {
    await setTimeOut(ms)
    console.log(value)
    return "hello async function"
}

asyncFunc("tom", 2000).then((value => console.log(value)))