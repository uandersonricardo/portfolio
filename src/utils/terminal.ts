import CommandFactory from "../lib/terminal/CommandFactory";
import { Output } from "../lib/terminal/types";

export const commandToHTML = (command: string): string => {
  return command.replace(/ /g, "\xA0") || "\u200B";
};

export const runCommand = async (commandWithArgs: string): Promise<Output> => {
  const [command, ...args] = commandWithArgs.match(/\S+/g);
  const commandFactory = new CommandFactory();
  const commandInstance = commandFactory.getCommand(command);

  return await commandInstance.run(args);
};
