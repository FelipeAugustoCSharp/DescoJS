let rlSync = require('readline-sync');
let nome = rlSync.question('qual seu nome?')
//let nome = prompt("Insira seu nome:");
let idade = rlSync.question('Insira sua idade:');

console.log(`seu nome é ${nome} e sua idade é ${idade} anos`);