// Exercicio 1 - Fila
import readline from "readline-sync";
import { Queue } from "./queueMetodos";

const fila = new Queue();
let opcao = -1;

do {
  console.log("\n####### Fila de atendimento #######");
  console.log("1 - Adicionar Cliente");
  console.log("2 - Listar Clientes");
  console.log("3 - Chamar Cliente");
  console.log("0 - Sair");

  opcao = readline.questionInt("Digite uma opção: ");

  switch (opcao) {
    case 1:
      const nome = readline.question("Digite o nome: ");
      fila.enqueue(nome);
      console.log("\nFila: ");
      fila.printQueue();
      console.log("\nCliente Adicionado!");
      break;

    case 2:
      console.log("\nLista de Clientes na Fila:");
      fila.printQueue();
      break;

    case 3:
      const chamado = fila.dequeue();
      if (chamado) {
        console.log("\nFila: ");
        fila.printQueue();
        console.log("\nO Cliente foi Chamado!");
      } else {
        console.log("\nA Fila está vazia!");
      }
      break;

    case 0:
      console.log("\nPrograma Finalizado!");
      break;

    default:
      console.log("❌ Opção inválida.");
  }
} while (opcao !== 0);
