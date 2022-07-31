import Command from "./Command";
import { Output } from "../types";
import CommandFactory from "../CommandFactory";

class HelpCommand implements Command {
  run(args?: string[]): Output {
    if (args.length > 0) {
      const command = args[0];
      const commandFactory = new CommandFactory();
      const commandInstance = commandFactory.getCommand(command);
      const help = commandInstance.help();

      return { type: "response", value: help };
    }

    const text = `Para obter mais informações sobre um comando específico,
digite "help <comando>"

Comandos disponíveis:
  help          Exibe este texto
  echo          Exibe o texto que você digitar
  clear         Limpa a tela
  info          Exibe informações sobre mim`;

    return { type: "response", value: text };
  }

  help(): string {
    return `Exibe ajuda sobre um comando específico.

Formato:
  help <comando>`;
  }
}

export default HelpCommand;
