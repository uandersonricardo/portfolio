import Command from "./Command";
import { Output } from "../types";

class ProjectsCommand implements Command {
  async run(): Promise<Output> {
    const projects = `Oton.io
Portfólio
Face the Wall
Dino.io
Tetrl.io
Cobrinha.io
Guitar.io`;

    return { type: "response", value: projects };
  }

  help(): string {
    return `Exibe informações sobre os meus projetos.

Formato:
  projects`;
  }
}

export default ProjectsCommand;
