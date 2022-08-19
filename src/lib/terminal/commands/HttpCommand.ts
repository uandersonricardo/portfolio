import axios from "axios";

import Command from "./Command";
import { Output } from "../types";

class HttpCommand implements Command {
  async run(args?: string[]): Promise<Output> {
    if (!args || args.length < 2) {
      return {
        type: "response",
        value: "Escolha o método e o endereço da requisição.",
      };
    }

    const headers = {};
    const query = {};
    const body = {};

    for (let i = 2; i < args.length; i++) {
      const arg = args[i];

      const indexOption = arg.indexOf(":");

      if (indexOption === -1) {
        return {
          type: "response",
          value: "Formato inválido. Use o formato: <opção>:<chave>=<valor>.",
        };
      }

      const option = arg.substring(0, indexOption).toLowerCase();
      const operation = arg.substring(indexOption + 1);
      const indexOperation = operation.indexOf("=");

      if (indexOperation === -1) {
        return {
          type: "response",
          value: "Formato inválido. Use o formato: <opção>:<chave>=<valor>.",
        };
      }

      const key = operation.substring(0, indexOperation);
      const value = operation.substring(indexOperation + 1);

      switch (option) {
        case "header":
          headers[key] = value;
          break;
        case "query":
          query[key] = value;
          break;
        case "body":
          body[key] = value;
          break;
        default:
          return {
            type: "response",
            value:
              'Opção inválida. Utilize as palavras-chave "header", "query" ou "body".',
          };
      }
    }

    const response = await axios.request({
      method: args[0],
      url: args[1],
      headers,
      params: query,
      data: body,
      validateStatus: () => true,
    });

    const http = `Status:
  ${response.status} ${response.statusText}

Cabeçalhos:
${Object.keys(response.headers)
  .map((key) => `  ${key}: ${response.headers[key]}`)
  .join("\n")}

Resposta:
${
  typeof response.data === "object"
    ? JSON.stringify(response.data, null, 2)
    : response.data
}`;

    return { type: "response", value: http };
  }

  help(): string {
    return `Realiza requisições HTTP.

Formato:
  http <método> <endereço> <opções>
  
<método>: get, post, put, patch ou delete
<endereço>: URL da requisição
<opções>: cada opção deve seguir o formato <opção>:<chave>=<valor> e devem ser
  separadas por espaços, usando "header", "query" ou "body" como <opção>`;
  }
}

export default HttpCommand;
