function somarArray(array) {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(array)){
            reject("Não é um array")
        }
        const soma = array.reduce((total, num) => total + num,0);
        resolve(soma)
    })
}

const myArray = "asdas"//[1,2,3,4,5]
somarArray(myArray).then((result) => {
    console.log(result)
}).catch((erro) => {
    console.log(erro)
});