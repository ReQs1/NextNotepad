"use client";

import { Menu } from "lucide-react";
import { useMobileNavbar } from "@/app/_context/MobileNavbarProvider";

function BurgerButton() {
  const { openMobileNavbar } = useMobileNavbar();
  return (
    <button className="mr-4 sm:hidden" onClick={openMobileNavbar}>
      <Menu size={28} />
    </button>
  );
}

export default BurgerButton;
