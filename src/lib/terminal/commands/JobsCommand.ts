import Command from "./Command";
import { Output } from "../types";

class JobsCommand implements Command {
  async run(): Promise<Output> {
    const jobs = `Instituto Federal de Pernambuco
Educandus`;

    return { type: "response", value: jobs };
  }

  help(): string {
    return `Exibe informações sobre os meus trabalhos.

Formato:
  jobs`;
  }
}

export default JobsCommand;
