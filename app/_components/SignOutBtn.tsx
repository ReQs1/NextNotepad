"use client";

import { SignOutButton, useUser } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

function SignOutBtn() {
  const { isLoaded } = useUser();

  if (!isLoaded)
    return (
      <button>
        <LogOut />
      </button>
    );

  return (
    <SignOutButton redirectUrl="/sign-in">
      <button className="text-primary">
        <LogOut />
      </button>
    </SignOutButton>
  );
}

export default SignOutBtn;
