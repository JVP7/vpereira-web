"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("dark");

  // update theme
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try { localStorage.setItem("theme", newTheme); } catch { /* Storage can be unavailable. */ }
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // initialize theme
  useEffect(() => {
    let savedTheme: Theme | null = null;
    try { const saved = localStorage.getItem("theme"); if(saved === "light" || saved === "dark") savedTheme = saved; } catch { /* Use system preference. */ }
    const initialTheme = savedTheme || "dark";

    setThemeState(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// use custom hook to use ThemeContext
export function useTheme() {
  const context = useContext(ThemeContext);

  if(context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
