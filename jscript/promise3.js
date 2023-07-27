class MinhaClasse{
    constructor(valor){
        this.valor = valor;
    }

    operacaoAsync(){
        return new Promise((utilizado, rejeitado) => {
            const result = this.valor * 2;
            if(result>=10){
                utilizado(result);
            }else{
                rejeitado("o resultado é negativo")
            };
        })
    }
}
const minhaClasse = new MinhaClasse(2);
minhaClasse.operacaoAsync()
.then((resultado) => {
    console.log("o resultado é: "+ resultado)
}).catch((e) => {
    console.log("ocorreu um problema: "+ e)
})