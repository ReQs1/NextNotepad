import BurgerButton from "@/app/_components/BurgerButton";
import TopNavControls from "@/app/_components/TopNavControls";

import { NotebookPen } from "lucide-react";

function TopNavbar() {
  return (
    <header className="sticky top-0 z-50 flex justify-between border-b border-b-secondary bg-bg1 px-6 py-4">
      <div className="flex items-center gap-4 lg:gap-6">
        <BurgerButton />
        <NotebookPen />
        <h1 className="text-lg font-semibold text-primary">Notepad</h1>
      </div>
      <TopNavControls />
    </header>
  );
}

export default TopNavbar;
