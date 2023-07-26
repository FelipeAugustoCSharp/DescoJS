                //verificar         //funcão
function processName(nome,          callback) {
    if(typeof nome !== 'string'){
        //uma funçao que retorna um erro ou se deu certo
        callback(new Error('O Nome deve ser uma String'));
        return;
    }
    if(nome.length === 0){
        //uma funçao que retorna um erro ou se deu certo;

        //chamou a função mas como nao tem vírgula, para 
        //diferenciar o erro e o result, o proprio javascript
        // ja sabe que caiu no err
        //EXEMPLO:
        //callback(new Error('O Nome nao pode estar vazio'), RESULTADO);
        callback(new Error('O Nome nao pode estar vazio'));
        return; 
    }
    //uma funçao que retorna um erro ou se deu certo
    //AQUI FICOU O RESULTADO
    callback(null, "Nome processado com sucesso");
}
            //Name       //callback é uma funçao e esses sao os parametros dessa funcao
processName("Marcelo", (error, result) => {
    if(error){
        console.log('Ocorreu um problema', error.message);
    }
    else{
        console.log(result);
    }
})