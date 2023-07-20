let arr = [1,2,3,4,5,6,7]

let modificarMap = arr.map(function (num) {
    return num*2;
});

console.log(modificarMap)
//ATIVIDADE: verificar se um valor existe utilizando o map

var funcionarios = [
    {nome: "Luiz", idade: "23", sexo: "Masculino", funcao: "Aux.Limpeza"},
    {nome: "Roberta", idade: "53",sexo: "Feminino", funcao: "Recepcionista"},
    {nome: "José", idade: "32",sexo: "Masculino", funcao: "Recepcionista"},
    {nome: "Giovana", idade: "22",sexo: "Feminino", funcao: "Portaria"}
];

let nomes = funcionarios.map(pessoa => pessoa.nome);
console.log(nomes)
