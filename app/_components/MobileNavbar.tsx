"use client";

import { useMobileNavbar } from "@/app/_context/MobileNavbarProvider";
import SignOutBtn from "@/app/_components/SignOutBtn";
import ThemeButton from "@/app/_components/ThemeButton";
import { cn } from "@/app/_lib/utils";
import { Calendar, Notebook, X } from "lucide-react";
import Link from "next/link";

const Links = [
  {
    href: "/account/notepad",
    label: "Notes",
    icon: <Notebook />,
  },
  {
    href: "/account/calendar",
    label: "Calendar",
    icon: <Calendar />,
  },
];

function MobileNavbar() {
  const { isMobileNavbarOpen, closeMobileNavbar } = useMobileNavbar();

  return (
    <nav
      className={cn(
        "fixed sm:hidden z-50 inset-0 transition-transform duration-500 ease-in-out bg-bg1",
        {
          ["-translate-x-full"]: !isMobileNavbarOpen,
        }
      )}
      aria-label="mobile navigation"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <button className="" onClick={closeMobileNavbar}>
          <X size={28} />
        </button>
        <div className="flex items-center gap-5">
          <ThemeButton />
          <SignOutBtn className="" />
        </div>
      </div>
      <ul>
        {Links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="flex items-center gap-3">
              <span>{link.icon}</span>
              <p>{link.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileNavbar;
