"use client";

import { Menu } from "lucide-react";

function BurgerButton() {
  return (
    <button className="mr-4 md:hidden">
      <Menu size={28} />
    </button>
  );
}

export default BurgerButton;
