function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let type = i;
        let shooter = function () {
            console.log(type);
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}
let army = makeArmy();

army[0]();
army[1]();
army[2]();