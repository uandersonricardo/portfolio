import Command from "./Command";
import { Output } from "../types";
import CommandFactory from "../CommandFactory";

class HelpCommand implements Command {
  async run(args?: string[]): Promise<Output> {
    if (args.length > 0) {
      const command = args[0];
      const commandFactory = new CommandFactory();
      const commandInstance = commandFactory.getCommand(command);
      const help = commandInstance.help();

      return { type: "response", value: help };
    }

    const text = `Para obter mais informações sobre um comando específico,
digite "help <comando>".

Comandos disponíveis:
  clear         Limpa o terminal
  contact       Exibe informações de contato
  echo          Exibe o texto que você digitar
  education     Exibe informações sobre a minha formação
  help          Exibe o guia de ajuda
  http          Realiza uma requisição HTTP
  info          Exibe informações sobre mim
  interests     Exibe informações sobre minhas áreas de interesses
  jobs          Exibe informações sobre os meus trabalhos
  projects      Exibe informações sobre meus projetos
  theme         Exibe informações e altera o tema do site`;

    return { type: "response", value: text };
  }

  help(): string {
    return `Exibe ajuda sobre um comando específico.

Formato:
  help <comando>`;
  }
}

export default HelpCommand;
