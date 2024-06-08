import { SignOutButton } from "@clerk/nextjs";

export const metadata = {
  title: "Notes",
};

export default function page() {
  return (
    <div>
      <SignOutButton redirectUrl="/sign-in" />
    </div>
  );
}
