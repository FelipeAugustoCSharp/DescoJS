var numeros = [1,2,3,4,5,6,7,8,9,10];


var resultado = numeros.filter(x => x %2 != 0);
//console.log(resultado);



var numerosFiltrados = numeros.filter(
    function (valor) {
        return valor > 5;
    }
);
//console.log(numerosFiltrador)

function acharImpar(valor){
    if(valor %2 != 0){
        return valor;
    }
}

//var Impares = numeros.filter(acharImpar);
//console.log(resultado2);
var r1 = numeros.filter((valor) => valor %2 != 0)
//console.log(r1);

var funcionarios = [
    {nome: "Luiz", idade: "23", sexo: "Masculino", funcao: "Aux.Limpeza"},
    {nome: "Roberta", idade: "53",sexo: "Feminino", funcao: "Recepcionista"},
    {nome: "José", idade: "32",sexo: "Masculino", funcao: "Recepcionista"},
    {nome: "Giovana", idade: "22",sexo: "Feminino", funcao: "Portaria"}
];

//var funcionariosHomens = funcionarios.filter(x => console.log(x.sexo))
/*var funcionariosHomens1 = funcionarios.filter(
    function (valor) {
        console.log(valor.nome)
    }
)*/
//console.log();

let arr = [3,4,5,6,7]

let modificarMap = arr.map(function (elemento) {
    return elemento+elemento;
});
console.log(modificarMap)