import * as readline from 'readline-sync';
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
