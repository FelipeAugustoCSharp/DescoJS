function divide(a,b) {
    if(b === 0){
        throw new Error("Divisão não permitida!")
    }
    return a/b;
}
try{
    const result = divide(10,0);
    console.log('resultado', result)
}catch(e){
    console.log('Excessão encontrada: ', e.message)
}