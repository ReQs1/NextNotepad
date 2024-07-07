"use client";

import { useMobileNavbar } from "@/app/_context/MobileNavbarProvider";
import TopNavControls from "@/app/_components/TopNavControls";
import { cn } from "@/app/_lib/utils";
import { X } from "lucide-react";
import MobileLinks from "./MobileLinks";

function MobileNavbar() {
  const { isMobileNavbarOpen, closeMobileNavbar } = useMobileNavbar();

  return (
    <nav
      className={cn(
        "fixed sm:hidden z-50 inset-0 transition-transform duration-500 ease-in-out bg-bg1 overflow-scroll",
        {
          ["-translate-x-full"]: !isMobileNavbarOpen,
        }
      )}
      aria-label="mobile navigation"
      aria-hidden={!isMobileNavbarOpen}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <button className="" onClick={closeMobileNavbar}>
          <X size={28} />
        </button>
        <div className="flex items-center gap-5">
          <TopNavControls />
        </div>
      </div>
      <MobileLinks onClick={closeMobileNavbar} />
    </nav>
  );
}

export default MobileNavbar;
