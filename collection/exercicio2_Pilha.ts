// Exercicio 2 - Pilha
import readline from "readline-sync";
import { Stack } from "./stackMetodos";

const pilha = new Stack<string>();
let opcao = -1;

do {
  console.log("\n####### Pilha de Livros #######");
  console.log("1 - Adicionar Livro");
  console.log("2 - Listar Livros");
  console.log("3 - Retirar Livro");
  console.log("0 - Sair");

  opcao = readline.questionInt("Digite uma opção: ");

  switch (opcao) {
    case 1:
      const nome = readline.question("Digite o nome: ");
      pilha.push(nome);
      console.log("\nPilha:");
      pilha.printStack();
      console.log("\nLivro adicionado!");
      break;

    case 2:
      console.log("\nLista de Livros na Pilha:");
      pilha.printStack();
      break;

    case 3:
      const retirado = pilha.pop();
      if (retirado) {
        console.log("\nPilha:");
        pilha.printStack();
        console.log("\nUm Livro foi retirado da pilha!");
      } else {
        console.log("\nA Pilha está vazia!");
      }
      break;

    case 0:
      console.log("\nPrograma Finalizado!");
      break;

    default:
      console.log("\nOpção inválida.");
  }
} while (opcao !== 0);
