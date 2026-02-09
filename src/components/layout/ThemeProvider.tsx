"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "light", toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

const darkVars: Record<string, string> = {
  "--surface": "#0f0f0f",
  "--surface-elevated": "rgba(30, 30, 30, 0.72)",
  "--surface-overlay": "rgba(15, 15, 15, 0.85)",
  "--text-primary": "#e8e8e8",
  "--text-secondary": "#a0a0a0",
  "--text-tertiary": "#707070",
  "--glass-bg": "rgba(30, 30, 30, 0.75)",
  "--glass-border": "rgba(255, 255, 255, 0.08)",
  "--glass-shadow": "0 4px 24px rgba(0, 0, 0, 0.3)",
  "--glass-shadow-hover": "0 8px 32px rgba(0, 0, 0, 0.4)",
  "--bubble-shadow": "0 2px 16px rgba(0, 0, 0, 0.25)",
  "--bubble-bg": "rgba(35, 35, 35, 0.85)",
  "--bubble-border": "rgba(255, 255, 255, 0.1)",
  "--divider": "rgba(255, 255, 255, 0.08)",
  "--subtle-bg": "rgba(255, 255, 255, 0.06)",
  "--subtle-bg-hover": "rgba(255, 255, 255, 0.1)",
  "--tab-active-bg": "#2a2a2a",
  "--overlay-bg": "rgba(0, 0, 0, 0.50)",
  "--close-bg": "rgba(255, 255, 255, 0.08)",
  "--close-bg-hover": "rgba(255, 255, 255, 0.14)",
  "--surface-fade-60": "rgba(15, 15, 15, 0.85)",
  "--surface-fade-20": "rgba(15, 15, 15, 0.45)",
  "--icon-fallback-from": "#1f2937",
  "--icon-fallback-to": "#374151",
  "--icon-mono-filter": "invert(1)",
};

const lightVars: Record<string, string> = {
  "--surface": "#fafafa",
  "--surface-elevated": "rgba(255, 255, 255, 0.72)",
  "--surface-overlay": "rgba(250, 250, 250, 0.85)",
  "--text-primary": "#1a1a1a",
  "--text-secondary": "#6b6b6b",
  "--text-tertiary": "#999999",
  "--glass-bg": "rgba(255, 255, 255, 0.78)",
  "--glass-border": "rgba(255, 255, 255, 0.45)",
  "--glass-shadow": "0 4px 24px rgba(0, 0, 0, 0.06)",
  "--glass-shadow-hover": "0 8px 32px rgba(0, 0, 0, 0.1)",
  "--bubble-shadow": "0 2px 16px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.6) inset",
  "--bubble-bg": "rgba(255, 255, 255, 0.82)",
  "--bubble-border": "rgba(255, 255, 255, 0.7)",
  "--divider": "rgba(0, 0, 0, 0.06)",
  "--subtle-bg": "rgba(0, 0, 0, 0.04)",
  "--subtle-bg-hover": "rgba(0, 0, 0, 0.08)",
  "--tab-active-bg": "#ffffff",
  "--overlay-bg": "rgba(0, 0, 0, 0.20)",
  "--close-bg": "rgba(0, 0, 0, 0.05)",
  "--close-bg-hover": "rgba(0, 0, 0, 0.1)",
  "--surface-fade-60": "rgba(250, 250, 250, 0.6)",
  "--surface-fade-20": "rgba(250, 250, 250, 0.2)",
  "--icon-fallback-from": "#f3f4f6",
  "--icon-fallback-to": "#e5e7eb",
  "--icon-mono-filter": "none",
};

function applyThemeVars(theme: Theme) {
  const vars = theme === "dark" ? darkVars : lightVars;
  const root = document.documentElement;
  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(key, value);
  }
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const initial = stored ?? preferred;
    setTheme(initial);
    applyThemeVars(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyThemeVars(theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
