import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes",
  description: "A place to jot down your thoughts.",
};

export default function NotepadPage() {
  return (
    <main className="flex-1 px-8 py-8">
      {" "}
      {Array.from({ length: 200 }, (_, index) => (
        <div key={index}>meow</div>
      ))}
    </main>
  );
}
