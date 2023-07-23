class ContaCliente{
    constructor(numeroConta, saldo, debito, credito){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.debito = debito;
        this.credito = credito;
    };

    
    calcularSaldoAtual(){
        return this.saldo - this.debito + this.credito;
    };
    
    verificarSaldo(){
        var saldoAtual = this.calcularSaldoAtual;
        
        if(saldoAtual > 0){
            alert("Saldo positivo R$" + this.saldo);
        }
        else{
            alert("Saldo negativo R$" + this.saldo);
        }
    };
}




//COMEÇA A PARTIR DAQUI NO HTML
let numeroConta = prompt("Digite o número da conta do cliente");
let saldo = parseFloat(prompt("Digite o saldo do cliente"));
let debito = parseFloat(prompt("Digite o debito do cliente"));
let credito = parseFloat(prompt("Digite o credito do cliente"));

let conta = new ContaCliente(numeroConta, saldo, debito, credito);
conta.verificarSaldo();