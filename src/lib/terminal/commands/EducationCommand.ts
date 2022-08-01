import Command from "./Command";
import { Output } from "../types";

class EducationCommand implements Command {
  async run(): Promise<Output> {
    const education = `Colégio Maria Tereza
Minds English School
Instituto Federal de Pernambuco
Universidade Federal de Pernambuco`;

    return { type: "response", value: education };
  }

  help(): string {
    return `Exibe informações sobre a minha formação.

Formato:
  education`;
  }
}

export default EducationCommand;
