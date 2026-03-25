import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextValue {
  darkMode: boolean;
  toggleDark: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  darkMode: false,
  toggleDark: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function getInitialDarkMode(): boolean {
  try {
    const stored = localStorage.getItem("konflux-dark-mode");
    if (stored !== null) return stored === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch {
    return false;
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    localStorage.setItem("konflux-dark-mode", String(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDark: () => setDarkMode((d) => !d) }}>
      {children}
    </ThemeContext.Provider>
  );
}
