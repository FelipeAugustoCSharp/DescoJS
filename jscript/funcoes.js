function multiplicar(x, y){
    return x * y;
}
var a = multiplicar(2,4);
console.log(a);

var infoCal = function(a,b,c) {
    return a+b+c;
}
console.log(infoCal(1,3,7));

const soma = (num1, num2) =>  num1+num2;
console.log(soma(10,5))

const numeros = [1,2,3,4,5];
const valores = numeros.map((num) => num*num);
console.log(valores)
console.log("passou 1")