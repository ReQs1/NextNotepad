import NoteCard from "@/app/_components/NoteCard";
import { getNotes } from "@/app/_lib/queries";

async function NotesList({ searchQuery }: { searchQuery: string }) {
  const notes = await getNotes();

  const isEmpty = notes.length === 0;
  if (isEmpty)
    return (
      <p className="text-lg font-semibold">
        Looks like you don&apos;t have any note yet
      </p>
    );

  let filteredNotes;

  if (searchQuery) {
    filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  } else {
    filteredNotes = notes;
  }

  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(290,1fr))] gap-10">
      {filteredNotes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </ul>
  );
}

export default NotesList;
