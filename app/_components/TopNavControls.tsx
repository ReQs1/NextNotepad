"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SpinnerMini from "@/app/_components/SpinnerMini";
import { UserButton, useUser } from "@clerk/nextjs";

function TopNavControls() {
  const [isMounted, setIsMounted] = useState(false);
  const { isLoaded } = useUser();

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (isLoaded) {
      setIsMounted(true);
    }
  }, [isLoaded]);

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  }

  if (!isMounted)
    return (
      <div className="w-16 flex items-center justify-center">
        <SpinnerMini />
      </div>
    );

  return (
    <div className="flex items-center gap-6">
      <button className="text-primary" onClick={changeTheme}>
        {theme === "light" ? <Sun /> : <Moon />}
      </button>
      <UserButton />
    </div>
  );
}

export default TopNavControls;
