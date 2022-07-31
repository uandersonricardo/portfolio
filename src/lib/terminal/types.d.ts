export type HistoryCommand = {
  type: "command" | "output";
  text: string;
};

export type Output = {
  type: "action" | "response";
  value: string;
};
