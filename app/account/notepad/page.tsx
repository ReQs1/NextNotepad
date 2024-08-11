import CurrentNoteModal from "@/app/_components/CurrentNoteModal";
import CurrentNoteModalContent from "@/app/_components/CurrentNoteModalContent";
import NotesList from "@/app/_components/NotesList";
import NotesTopInputs from "@/app/_components/NotesTopInputs";
import Spinner from "@/app/_components/Spinner";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Notes",
  description: "A place to jot down your thoughts.",
};

type Props = {
  searchParams?: {
    search?: string;
    currNote?: string;
  };
};

export default function NotepadPage({ searchParams }: Props) {
  const search = searchParams?.search ?? "";
  const currNote = searchParams?.currNote ?? "";

  return (
    <>
      <main className="flex-1 px-3 py-10 sm:px-10">
        <NotesTopInputs />
        <Suspense fallback={<Spinner />}>
          <NotesList searchQuery={search} />
        </Suspense>
      </main>

      {currNote && (
        <CurrentNoteModal currNote={currNote}>
          <Suspense key={currNote} fallback={<Spinner />}>
            <CurrentNoteModalContent currNote={currNote} />
          </Suspense>
        </CurrentNoteModal>
      )}
    </>
  );
}
