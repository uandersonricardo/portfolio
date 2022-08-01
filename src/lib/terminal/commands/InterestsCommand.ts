import Command from "./Command";
import { Output } from "../types";

class InterestsCommand implements Command {
  async run(): Promise<Output> {
    const interests = `Inteligência Artificial
UI/UX Design
Sistemas Embarcados
Educação
Publicidade
Empreendedorismo
Desenvolvimento De Produtos
Biotecnologia
Economia
Visão Computacional
Realidade Estendida (XR)
Reconhecimento De Voz
Eletrônica Digital
Carros Autônomos`;

    return { type: "response", value: interests };
  }

  help(): string {
    return `Exibe informações sobre as minhas áreas de interesse.

Formato:
  interests`;
  }
}

export default InterestsCommand;
