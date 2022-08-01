import Command from "./Command";
import { Output } from "../types";

class InfoCommand implements Command {
  async run(): Promise<Output> {
    const info = `Nome: Uanderson Ricardo
Pronomes: Ele, Dele
Local: Recife, Pernambuco
Profissão: Fullstack Developer
Educação: Graduando em Engenharia na Computação (UFPE), Técnico em Eletrônica (IFPE)
Linguagens: Javascript, Typescript, Python, PHP, C, C#
Tecnologias: React, Next.js, Node, Laravel, PostgreSQL, Jest, Arduino, Figma
Hobbies: Guitarra, Violão, e-Sports, Cinema`;

    return { type: "response", value: info };
  }

  help(): string {
    return `Exibe informações sobre mim.

Formato:
  info`;
  }
}

export default InfoCommand;
