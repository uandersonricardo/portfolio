import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import { HistoryCommand } from "../../lib/terminal/types";
import { commandToHTML, runCommand } from "../../utils/terminal";

const Terminal = () => {
  const { theme, setTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>();
  const scrollableRef = useRef<HTMLElement>();
  const [command, setCommand] = useState<string>("");
  const [history, setHistory] = useState<HistoryCommand[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleTerminalAction = (action: string) => {
    if (action === "clear") {
      setHistory([]);
      return;
    }

    if (action === "theme") {
      setHistory((history) => [
        ...history,
        {
          type: "output",
          text:
            (theme === "dark"
              ? "O site está configurado no modo escuro."
              : "O site está configurado no modo claro.") + "\n\n",
        },
      ]);
      return;
    }

    if (action.startsWith("theme:")) {
      const theme = action.split(":")[1];
      setTheme(theme);
      return;
    }
  };

  const sendToTerminal = async (text: string) => {
    setHistory((history) => [...history, { type: "command", text }]);

    if (text.length > 0) {
      const output = await runCommand(text);

      if (output.type === "response") {
        setHistory((history) => [
          ...history,
          { type: "output", text: output.value + "\n\n" },
        ]);
      } else if (output.type === "action") {
        handleTerminalAction(output.value);
      }
    }

    setCommand("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendToTerminal(command);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const onFocus = () => {
    setIsTyping(true);
  };

  const onBlur = () => {
    setIsTyping(false);
  };

  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    sendToTerminal("info");
  }, []);

  return (
    <div className="relative overflow-hidden shadow-xl bg-black border border-gray-600 max-w-full w-[108ch] flex h-auto max-h-auto sm:max-h-[none] sm:rounded-xl lg:h-auto xl:h-auto">
      <div className="relative w-full flex flex-col">
        <div className="flex-none border-b border-gray-600">
          <div className="flex items-center h-8 space-x-2 px-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div
          className="relative min-h-0 h-[30em] flex-auto flex flex-col"
          onClick={handleClick}
        >
          <input
            ref={inputRef}
            value={command}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            className="w-0 h-0 opacity-0"
          />
          <code className="flex-auto relative block overflow-hidden text-white">
            <SimpleBar
              className="max-h-full p-4"
              autoHide={false}
              scrollableNodeProps={{ ref: scrollableRef }}
            >
              {history.map((line, index) => (
                <div
                  key={index}
                  className="w-full flex items-center whitespace-pre-wrap"
                >
                  {line.type === "command" && (
                    <span className="text-purple-500">{"> "}</span>
                  )}
                  <span>{line.text}</span>
                </div>
              ))}
              <div className="w-full flex items-center whitespace-pre-wrap">
                <span className="text-purple-500">{"> "}</span>
                <span
                  className={`min-w-[1px] ${isTyping ? "caret-blink" : ""}`}
                >
                  {commandToHTML(command)}
                </span>
              </div>
            </SimpleBar>
          </code>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
