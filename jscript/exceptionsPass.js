const numeros = [1,'dois',2,3,4,5];
try {
    const doubleNumbers = numeros.map((num) => {
        if(typeof num !== 'number'){
            throw new Error('O Array só pode conter numeros')
        }
        return num * 2;
    });
    console.log(doubleNumbers)
} catch (e) {
    console.log('Excessão encontrada: ' + e.message)
}