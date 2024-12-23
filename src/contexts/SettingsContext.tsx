import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "it";
type Theme = "light" | "dark";

interface SettingsContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") as Theme;
      if (storedTheme) {
        return storedTheme;
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add(theme);
  }, []);

  return (
    <SettingsContext.Provider
      value={{ language, setLanguage, theme, setTheme }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
