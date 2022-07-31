import { useCallback, useEffect, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import { HistoryCommand } from "../../lib/terminal/types";
import { commandToHTML, runCommand } from "../../utils/terminal";

const Terminal = () => {
  const inputRef = useRef<HTMLInputElement>();
  const scrollableRef = useRef<HTMLElement>();
  const [command, setCommand] = useState<string>("");
  const [history, setHistory] = useState<HistoryCommand[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const sendToTerminal = useCallback((text: string) => {
    setHistory((history) => [...history, { type: "command", text }]);

    if (text.length > 0) {
      const output = runCommand(text);

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
  }, []);

  const handleTerminalAction = (action: string) => {
    switch (action) {
      case "clear":
        setHistory([]);
        break;
      default:
        break;
    }
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
  }, [sendToTerminal]);

  return (
    <div className="relative overflow-hidden shadow-xl max-w-full w-[108ch] flex bg-gray-800 h-auto max-h-auto] sm:max-h-[none] sm:rounded-xl lg:h-auto xl:h-auto dark:bg-gray-900">
      <div className="relative w-full flex flex-col">
        <div className="flex-none border-b border-gray-500/30">
          <div className="flex items-center h-8 space-x-1.5 px-3">
            <div className="w-2.5 h-2.5 bg-gray-600 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-gray-600 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-gray-600 rounded-full"></div>
          </div>
        </div>
        <div
          className="relative min-h-0 h-[25em] flex-auto flex flex-col"
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
          <code className="flex-auto relative block pt-4 pb-4 px-4 overflow-hidden text-white">
            <SimpleBar
              className="max-h-full"
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
