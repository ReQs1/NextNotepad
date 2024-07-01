"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SpinnerMini from "@/app/_components/SpinnerMini";

function ThemeButton() {
  const [isMounted, setIsMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  }

  if (!isMounted) return <SpinnerMini />;

  return (
    <button onClick={changeTheme}>
      {theme === "light" ? <Sun color="#000" /> : <Moon color="#fff" />}
    </button>
  );
}

export default ThemeButton;
