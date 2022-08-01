import Command from "./Command";
import { Output } from "../types";

class ContactCommand implements Command {
  async run(): Promise<Output> {
    const contact = `Github: https://github.com/uandersonricardo
LinkedIn: https://www.linkedin.com/in/uandersonricardo
Instagram: https://instagram.com/uandersonrfs
Twitter: https://twitter.com/uandersonrfs
Email: uandersonrfs@gmail.com
Whatsapp: +55 81 98633-0884`;

    return { type: "response", value: contact };
  }

  help(): string {
    return `Exibe informações sobre as minhas redes sociais e formas de contato.

Formato:
  contact`;
  }
}

export default ContactCommand;
