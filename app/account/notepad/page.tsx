import NotesList from "@/app/_components/NotesList";
import NotesTopInputs from "@/app/_components/NotesTopInputs";
import Spinner from "@/app/_components/Spinner";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Notes",
  description: "A place to jot down your thoughts.",
};

export default function NotepadPage() {
  return (
    <main className="flex-1 px-6 py-10 sm:px-10">
      <NotesTopInputs />
      <Suspense fallback={<Spinner />}>
        <NotesList />
      </Suspense>
    </main>
  );
}
