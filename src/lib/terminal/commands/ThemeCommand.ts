import Command from "./Command";
import { Output } from "../types";

class ThemeCommand implements Command {
  async run(args?: string[]): Promise<Output> {
    if (args && args.length > 0) {
      const theme = args[0].toLowerCase();
      if (theme === "light" || theme === "dark") {
        return { type: "action", value: "theme:" + theme };
      }

      return { type: "response", value: "Tema não reconhecido." };
    }

    return { type: "action", value: "theme" };
  }

  help(): string {
    return `Exibe informações e altera o tema do site.
    
Formato:
  theme <tema>
  
<tema>: light ou dark`;
  }
}

export default ThemeCommand;
