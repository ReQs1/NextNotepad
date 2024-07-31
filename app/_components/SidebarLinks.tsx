"use client";

import { SignOutButton } from "@clerk/nextjs";
import { Calendar, LogOut, NotebookIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/_lib/utils";

const links = [
  { icon: <NotebookIcon />, path: "/account/notepad", tooltip: "Notepad" },
  { icon: <Calendar />, path: "/account/calendar", tooltip: "Calendar" },
];

function SidebarLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={cn(
            "group relative rounded-full p-2 transition-colors duration-300 hover:bg-hoverAccent",
            {
              ["bg-hoverAccent"]: pathname === link.path,
            },
          )}
        >
          {link.icon}
          <span className="tooltip">{link.tooltip}</span>
        </Link>
      ))}

      <div className="mt-auto flex cursor-pointer rounded-full p-2 transition-colors duration-300 hover:bg-hoverAccent">
        <SignOutButton redirectUrl="/sign-in">
          <button>
            <LogOut />
          </button>
        </SignOutButton>
      </div>
    </nav>
  );
}

export default SidebarLinks;
