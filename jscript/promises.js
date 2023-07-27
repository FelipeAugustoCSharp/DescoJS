/*quando recebe dados externos(API)
ele é tratado pelo promise
*/
const minhaPromise = new Promise((resolve, reject) => {
    const sucesso = true;
    if (sucesso) {
        resolve("Deu bom");
    }else{
        reject("Deu ruim");
    }
})

//.then trata tudo aquilo que deu certo
minhaPromise.then((resultado) =>{
    console.log("foi sucesso:" + resultado)
})
.catch((erro) => {
    console.log("deu erro: "+ erro)
})

// .then & .catch