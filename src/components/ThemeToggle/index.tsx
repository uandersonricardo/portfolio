import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// Aqui temos os ícones de Lua e Sol
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  function isDark() {
    return theme === "dark";
  }

  return (
    <button
      className="focus:outline-none"
      onClick={() => setTheme(isDark() ? "light" : "dark")}
      aria-label="Theme toggle"
    >
      {isDark() ? (
        <BiSun data-testid="sun" size={20} />
      ) : (
        <BiMoon data-testid="moon" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
