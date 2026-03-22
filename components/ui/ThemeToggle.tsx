"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const isDark = !dark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center justify-center w-7 h-7 rounded-md text-[var(--muted)] hover:text-[var(--text)] hover:bg-black/6 dark:hover:bg-white/8 transition-colors cursor-pointer"
    >
      {dark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
