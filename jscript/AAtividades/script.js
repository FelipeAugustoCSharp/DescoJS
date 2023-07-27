class funcionario{
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade - idade;
        this.cargo = cargo;
    }

    seApresentar(){
        console.log(`Ola meu nome é ${this.nome} e eu vou trabalhar aqui como ${this.cargo}`)
    }

    trabalhar(){
        console.log(`Estou ${this.nome} trabalhando `)
    }
}

class gerente extends funcionario{
    constructor(nome, idade, cargo, departamento){
        super(nome, idade, cargo);
        this.departamento = departamento;
    }
    gerenciar(){
        console.log(`Eu ${this.nome} estou Gerenciando`);
    }
}

class desenvolvedor extends funcionario{
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo);
        this.linguagem = linguagem
    }
    programar(){
        console.log(`Eu ${this.nome} estou Programando`)
    }
}

function pegarArgumentos() {
    this.nome = document.forms["formCadastro"]["nome"].value;
    this.idade = document.forms["formCadastro"]["idade"].value;
    this.cargo  = document.forms["formCadastro"]["cargo"].value;
    this.departamento = document.forms["formCadastro"]["departamento"].value;
    
    if(this.cargo === 'Gerente'){
        novoGerente = new gerente(nome,idade,cargo,departamento);
        document.getElementById("Imprimir").innerText = this.cargo;
    }else if(this.cargo === 'Desenvolvedor'){
        novoDev = new desenvolvedor(nome,idade,cargo,departamento);
        document.getElementById("Imprimir").innerText = "essa pessoa é um(a): "+ this.cargo;
    }
    //document.getElementById("Imprimir").innerText = nome;
    event.preventDefault();
}
//puxar resultados através do HTML
//Usar excessoes para os tipos de dos incorretos
//campo: nome, idade, cargo, departamento e lang de programação

var novoDev = new desenvolvedor("Marcia", "27", "Desenvolvedora", "TI");