
var nome = "Ayla Silva";
var contagem = 0;
for (let i = 0; i < nome.length; i++) {
    if(nome[i] == "l"){
        contagem++;
        console.log(`a letra '${nome[i]}' apareceu ${Number(contagem)} vezes,\n e a posição dela é ${nome.indexOf(nome[i])}`)
    }
}

//passamos mais tento tentando configurar a IDE do que estudando 