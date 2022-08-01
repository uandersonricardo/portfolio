import Command from "./Command";
import { Output } from "../types";

class ErrorCommand implements Command {
  async run(): Promise<Output> {
    const text = 'Comando não encontrado. Digite "help" para obter ajuda.';

    return { type: "response", value: text };
  }

  help(): string {
    return `Não foi encontrado guia de ajuda para o comando especificado. Digite "help" para obter ajuda.`;
  }
}

export default ErrorCommand;
