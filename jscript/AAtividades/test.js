const Funcionario = new Object();
nome = document.forms["formCadastro"]["nome"].value;
idade = document.forms["formCadastro"]["idade"].value;
cargo = cargo = document.forms["formCadastro"]["cargo"].value;
departamento = document.forms["formCadastro"]["departamento"].value;
console.log(Funcionario)
document.getElementById("Imprimir").innerText = Funcionario.nome;
event.preventDefault();