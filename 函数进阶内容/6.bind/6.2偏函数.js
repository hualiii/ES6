function mul(x,y){
    console.log(x*y);
}
let double = mul.bind(null,2);

double(3);
double(5);