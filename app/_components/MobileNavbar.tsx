"use client";

import { useMobileNavbar } from "@/app/_context/MobileNavbarProvider";
import TopNavControls from "@/app/_components/TopNavControls";
import { cn } from "@/app/_lib/utils";
import { X } from "lucide-react";
import MobileLinks from "./MobileLinks";

function MobileNavbar() {
  const { isMobileNavbarOpen, closeMobileNavbar } = useMobileNavbar();

  return (
    <div
      className={cn(
        "fixed sm:hidden z-50 inset-0 transition-transform duration-500 ease-in-out bg-bg1",
        {
          ["-translate-x-full"]: !isMobileNavbarOpen,
        }
      )}
      aria-label="mobile navigation"
      aria-hidden={!isMobileNavbarOpen}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <button onClick={closeMobileNavbar} aria-label="Close mobile navbar">
          <X size={28} />
        </button>
        <TopNavControls />
      </div>
      <MobileLinks onClick={closeMobileNavbar} />
    </div>
  );
}

export default MobileNavbar;
