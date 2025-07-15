import * as readline from 'readline-sync';

//Exercício 1 (Lista 01)
const cores: string[] = [];

for (let i = 0; i < 5; i++) {
  const cor = readline.question(`Digite a cor ${i + 1}: `);
  cores.push(cor);
}

console.log("\nCores digitadas:");
console.log(cores);

console.log("\nCores em ordem crescente:");
console.log(cores.sort());
