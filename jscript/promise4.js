function obterValor(valor) {
    return new Promise((resolve, reject) => {
        if(valor>10){
           valor+=1;
           resolve(valor);
        }else{
            reject("o valor nao é válido");
        }
    })
}
function dobrarValor(valor) {
    return valor * 2;
}

function adicionar10(valor) {
    return valor + 10;
}

obterValor(28)
.then((valor) =>{
    console.log("valor obtido");
    return dobrarValor(valor);
     //o retorno armazena o que tem no primeiro 
    //then e pode ser utilizado novamente
})
.then((novoValor) => {
    console.log("fazendo o segundo tratamento")
    return adicionar10(novoValor);
})
.then((resultado) => {
    total = resultado +5;
    console.log("o resultado final é: ", total)
})
.catch((erro) => {
    console.log("ocorreu um erro: ", erro)
})