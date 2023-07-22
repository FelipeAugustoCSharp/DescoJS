var nome = "Felipe Augusto";
var jogo = "Barcelona vs Real Madrid";


var tamanho = nome.length;
console.log(tamanho);

var caixaAlta = nome.toLocaleUpperCase();
console.log(caixaAlta)

var resultado = tamanho > 10 ? "Obrigado" : "Preencha novamente";
console.log(resultado);

var posicao = jogo.indexOf("vs");
console.log(posicao);

var cortado = jogo.slice(13,);
console.log(cortado);

var existe = jogo.includes("Real")
console.log(existe);

var str1 = "Hello";
var str2 = " Turma";
var str3 = str1.concat(str2);
console.log(str3);

var frase = "         olá, vc está aprendendo javascript";
console.log(frase.trim());

var StringNum = "1|2|3|4|5|6|7|8";
var transformarEmArray = StringNum.split("|");

console.log(transformarEmArray);

