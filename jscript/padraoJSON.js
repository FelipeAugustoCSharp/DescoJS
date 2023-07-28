const pessoa = {
    nome: 'joao',
    idade: 35,
    profissao: "Desenvolvedor"
}

const pessoajson = JSON.stringify(pessoa);
console.log(pessoa);
console.log(pessoajson);

const pessoaObj = JSON.parse(pessoajson);

console.log(pessoaObj);