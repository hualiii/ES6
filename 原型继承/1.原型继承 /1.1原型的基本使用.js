let animal = {
    eat:true
}
let rabbit = {
    __proto__: animal,
    jump:true
}

for (const rabbitKey in Object.keys(rabbit)) {
    console.log(rabbitKey)
}