import { SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

export default async function Page() {
  const session = await auth();
  if (session.userId) redirect("/account/notepad");
  return (
    <main className="h-screen flex justify-center items-center bg-gray-300">
      <SignIn fallbackRedirectUrl="/account/notepad" />
    </main>
  );
}
