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

//Exercício 3 (Lista 02)
const numeros = new Set<number>();

while (numeros.size < 10) {
  const valor = Number(readline.question(`Digite o ${numeros.size + 1}º numero: `));

  if (numeros.has(valor)) {
    console.log("Numero repetido! Digite outro.");
  } else {
    numeros.add(valor);
  }
}

console.log("\nNumeros digitados:");
console.log(Array.from(numeros));
