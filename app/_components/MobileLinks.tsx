import { Calendar, Notebook } from "lucide-react";
import Link from "next/link";
import SignOutBtn from "./SignOutBtn";

const links = [
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

type MobileLinksType = {
  onClick: () => void;
};

function MobileLinks({ onClick }: MobileLinksType) {
  return (
    <nav className="flex h-[calc(100%-60px)] justify-center pb-16 pt-20">
      <ul className="flex h-full flex-col gap-20 text-3xl">
        {links.map((link) => (
          <li key={link.href} onClick={onClick} className="text-primary">
            <Link href={link.href} className="flex items-center gap-3">
              <span>{link.icon}</span>
              <p>{link.label}</p>
            </Link>
          </li>
        ))}
        <li className="mt-auto" onClick={onClick}>
          <SignOutBtn />
        </li>
      </ul>
    </nav>
  );
}

export default MobileLinks;
