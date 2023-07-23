class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.status = false; //aqui ele começa Desligado
    }
    ligar(){//ESSE if this.status significa basicamente if(this.status == true (verdade). pq qnd ele cria o objeto, ele já vem desligado
        if (this.status) {
            console.log("Status = Ok")
            return;
        }
        this.ligado = true;//dai aqui ele liga entao da próxima vez que vc chamar, ele vai entrar no this.status ok
    }
}
//EXTENDS == HERANÇA
class SmartPhone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}//por mim tudo bem. volto daqui 10minutos entao(15:10)

var s1 = new SmartPhone("Samsung","Preto","A71");
console.log(s1)
s1.ligar();

//OK