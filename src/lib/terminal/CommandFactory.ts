import Command from "./commands/Command";
import HelpCommand from "./commands/HelpCommand";
import ErrorCommand from "./commands/ErrorCommand";
import EchoCommand from "./commands/EchoCommand";
import InfoCommand from "./commands/InfoCommand";
import ClearCommand from "./commands/ClearCommand";

class CommandFactory {
  getCommand(commandName: string): Command {
    switch (commandName) {
      case "help":
        return new HelpCommand();
      case "echo":
        return new EchoCommand();
      case "info":
        return new InfoCommand();
      case "clear":
        return new ClearCommand();
      default:
        return new ErrorCommand();
    }
  }
}

export default CommandFactory;
