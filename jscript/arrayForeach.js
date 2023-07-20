var arr = [10,20,30,40,50,60]

/*arr.forEach(element => {
    console.log(element)
});*/

/*arr.forEach(function (valor, indice, array) {
    console.log(array[indice])
})*/

var carro = [{modelo: 'Audi A3', marca: 'Audi', ano: 2020},
             {modelo: 'Jetta', marca: 'BMW', ano: 2010}
            ]
for (let index in carro) {
    //console.log(carro[index]
    console.log(carro[index].ano);
}

for (let veiculo of carro) {
    console.log(veiculo.marca)
}