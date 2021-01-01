import React, { useEffect, useState } from "react";
import { Sun, Moon } from "react-feather";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState<"LIGHT" | "DARK">("LIGHT");
  const THEME = "THEME";

  useEffect(() => {
    chrome.storage.sync.get(THEME, ({ THEME }) => {
      if (THEME === "DARK") {
        console.log(THEME);
        setTheme("DARK");
      }
    });
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    console.log(body);
    if (theme === "DARK") {
      body?.classList.add("dark");
      chrome.storage.sync.set({ [THEME]: "DARK" });
    } else {
      body?.classList.remove("dark");
      chrome.storage.sync.set({ [THEME]: "LIGHT" });
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(theme === "DARK" ? "LIGHT" : "DARK");
  };

  return (
    <div onClick={handleToggleTheme} className="cursor-pointer">
      {theme === "LIGHT" ? <Sun size={14} /> : <Moon size={14} />}
    </div>
  );
};
