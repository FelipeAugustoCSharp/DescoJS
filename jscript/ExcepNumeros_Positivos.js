function checkPositive(numeros) {
    if(!Array.isArray(numeros)){
        throw new Error('O Argumento deve ser um Array');
    }
    //every = where do Linq
    const allPositive = numeros.every((x) => x > 0);
    if(!allPositive){
        throw new Error("Alguns valores não são positivos");
    }
    return true;
}
try{
    const numeros = [1,2,-5,3,4,5,6];
    const isPositive = checkPositive(numeros);
    console.log(isPositive)
}catch(e){
    console.log("Erro encontrado: ", e.message);
}
