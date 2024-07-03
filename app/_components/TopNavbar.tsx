import ThemeButton from "@/app/_components/ThemeButton";
import SignOutBtn from "@/app/_components/SignOutBtn";
import BurgerButton from "@/app/_components/BurgerButton";
import MobileNavbar from "@/app/_components/MobileNavbar";

import { NotebookPen } from "lucide-react";

function TopNavbar() {
  return (
    <nav
      className="px-6 lg:px-12 py-4 lg:py-5 bg-bg1 flex justify-between border-b border-b-secondary"
      aria-label="top-navbar"
    >
      <MobileNavbar />
      <div className="flex items-center gap-4 lg:gap-6">
        <BurgerButton />
        <NotebookPen />
        <h1 className="font-semibold text-lg text-primary">Notepad</h1>
      </div>
      <div className="flex items-center gap-6 lg:gap-8">
        <ThemeButton />
        <SignOutBtn />
      </div>
    </nav>
  );
}

export default TopNavbar;
