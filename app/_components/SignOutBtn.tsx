"use client";

import { SignOutButton, useUser } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

function SignOutBtn() {
  const { isLoaded } = useUser();

  if (!isLoaded)
    return (
      <div className="flex items-center gap-3">
        <span>
          <LogOut />
        </span>
        <span>Sign Out</span>
      </div>
    );

  return (
    <SignOutButton redirectUrl="/sign-in">
      <button className="text-primary flex items-center gap-3">
        <span>
          <LogOut />
        </span>
        Sign out
      </button>
    </SignOutButton>
  );
}

export default SignOutBtn;
