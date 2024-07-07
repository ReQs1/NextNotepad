import BurgerButton from "@/app/_components/BurgerButton";
import MobileNavbar from "@/app/_components/MobileNavbar";
import TopNavControls from "@/app/_components/TopNavControls";

import { NotebookPen } from "lucide-react";

function TopNavbar() {
  return (
    <nav
      className="px-6 py-4 bg-bg1 flex justify-between border-b border-b-secondary"
      aria-label="top-navbar"
    >
      <MobileNavbar />
      <div className="flex items-center gap-4 lg:gap-6">
        <BurgerButton />
        <NotebookPen />
        <h1 className="font-semibold text-lg text-primary">Notepad</h1>
      </div>
      <TopNavControls />
    </nav>
  );
}

export default TopNavbar;
