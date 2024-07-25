import NotesList from "@/app/_components/NotesList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes",
  description: "A place to jot down your thoughts.",
};

export default function NotepadPage() {
  return (
    <main className="flex-1 px-6 py-10 md:px-10">
      <div className="mb-10 flex gap-6">
        <input type="text" placeholder="Search for a note" />
        <button>Add Note</button>
      </div>
      <NotesList />
    </main>
  );
}
