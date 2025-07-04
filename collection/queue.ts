import readline = require("readline-sync");
import { Queue } from "./queueMetodos"
import { Stack } from "./stackMetodos";

const fila = new Queue<string>();
let continua: string = "";

do {
    console.log("####### Fila de atendimento #######");
    console.log("### Digite 1 cadastrar cliente ########");
    console.log("### Digite 2 finalizar atendimento ########");
    console.log("### Digite 3 ver lista de usuarios ######");
    console.log("### Digite 4 proximo da fila ########");
    let opcao = readline.questionInt(" -> ");

    switch (opcao) {
        case 1:
            fila.enqueue(readline.question("Nome: "));
            console.log("Cliente cadastrado com sucesso!");
        break;

        case 2:
            fila.dequeue();
        break;

        case 3:
            fila.printQueue();
        break;

        case 4:
            console.log(fila.peek());
        break;
        default:
            console.log("Opção invalida, tente novamente.");
    }
    continua = readline.question("Digite 's' para continuar ou 'n' para sair: ");
}
while (continua === "s") {
}

