import { SignIn } from "@clerk/nextjs";

export const metadata = {
  title: "Sign In",
};

export default function Page() {
  return (
    <main className="h-screen flex justify-center items-center">
      <SignIn />
    </main>
  );
}
