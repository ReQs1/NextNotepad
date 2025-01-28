"use client";

import BurgerButton from "@/app/_components/BurgerButton";
import TopNavControls from "@/app/_components/TopNavControls";

import { Calendar, NotebookPen } from "lucide-react";
import { usePathname } from "next/navigation";

function TopNavbar() {
  const pathname = usePathname();

  const isNotepad = pathname === "/account/notepad";
  const isCalendar = pathname === "/account/calendar";

  return (
    <header className="sticky top-0 z-50 flex justify-between border-b border-b-secondary bg-bg1 px-6 py-4">
      <div className="flex items-center gap-4 lg:gap-6">
        <BurgerButton />
        {isNotepad ? <NotebookPen /> : isCalendar ? <Calendar /> : ""}
        <h1 className="text-lg font-semibold text-primary">
          {isNotepad ? "Notepad" : isCalendar ? "Calendar" : ""}
        </h1>
      </div>
      <TopNavControls />
    </header>
  );
}

export default TopNavbar;
