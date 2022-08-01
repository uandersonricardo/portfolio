import { Output } from "../types";

interface Command {
  run(args?: string[]): Promise<Output>;
  help(): string;
}

export default Command;
