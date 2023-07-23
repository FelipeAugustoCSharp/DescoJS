class User{
   constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
   }

   falar(){
    console.log(`Olá ${this.nome}`)
   }

   get nomeCompleto(){ //UTILIZANDO O >GET<
    console.log(`Olá ${this.nome} ${this.sobrenome}`)
   }
}

p1 = new User("Fábio","Silva");
p1.falar();
p1.nomeCompleto; //qnd usar GET, nao precisa de parênteses

