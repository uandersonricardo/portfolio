import Command from "./Command";
import { Output } from "../types";

class EchoCommand implements Command {
  run(args?: string[]): Output {
    if (!args || args.length === 0) {
      return { type: "response", value: "" };
    }

    return { type: "response", value: args.join(" ") };
  }

  help(): string {
    return `Imprime o texto passado.

Formato:
  echo <texto>`;
  }
}

export default EchoCommand;
