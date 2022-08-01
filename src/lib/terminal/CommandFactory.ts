import Command from "./commands/Command";
import HelpCommand from "./commands/HelpCommand";
import ErrorCommand from "./commands/ErrorCommand";
import EchoCommand from "./commands/EchoCommand";
import InfoCommand from "./commands/InfoCommand";
import ClearCommand from "./commands/ClearCommand";
import ThemeCommand from "./commands/ThemeCommand";
import ProjectsCommand from "./commands/ProjectsCommand";
import EducationCommand from "./commands/EducationCommand";
import JobsCommand from "./commands/JobsCommand";
import InterestsCommand from "./commands/InterestsCommand";
import ContactCommand from "./commands/ContactCommand";
import HttpCommand from "./commands/HttpCommand";

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
      case "theme":
        return new ThemeCommand();
      case "projects":
        return new ProjectsCommand();
      case "education":
        return new EducationCommand();
      case "jobs":
        return new JobsCommand();
      case "interests":
        return new InterestsCommand();
      case "contact":
        return new ContactCommand();
      case "http":
        return new HttpCommand();
      default:
        return new ErrorCommand();
    }
  }
}

export default CommandFactory;
