"use client";

import { SignOutButton, useUser } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import { cn } from "@/app/_lib/utils";

type SignOutBtnProps = {
  className?: string;
};

function SignOutBtn({ className }: SignOutBtnProps) {
  const { isLoaded } = useUser();

  if (!isLoaded)
    return (
      <span className={className}>
        <LogOut />
      </span>
    );

  return (
    <SignOutButton redirectUrl="/sign-in">
      <button className={(cn("text-primary"), className)}>
        <LogOut />
      </button>
    </SignOutButton>
  );
}

export default SignOutBtn;
