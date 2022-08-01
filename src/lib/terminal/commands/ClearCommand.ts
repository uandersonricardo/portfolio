import Command from "./Command";
import { Output } from "../types";

class ClearCommand implements Command {
  async run(): Promise<Output> {
    return { type: "action", value: "clear" };
  }

  help(): string {
    return `Limpa o terminal.
    
Formato:
  clear`;
  }
}

export default ClearCommand;
