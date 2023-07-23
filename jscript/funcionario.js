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

var novoGerente = new gerente("Rogerio", "32", "Gerente", "Administração");
var novoDev = new desenvolvedor("Marcia", "27", "Desenvolvedora", "TI");
novoGerente.seApresentar();
novoDev.seApresentar();
novoGerente.trabalhar();
novoDev.trabalhar();
novoGerente.gerenciar();
novoDev.programar();

