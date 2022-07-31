import { Output } from "../types";

interface Command {
  run(args?: string[]): Output;
  help(): string;
}

export default Command;
