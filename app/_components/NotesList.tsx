import NoteCard from "@/app/_components/NoteCard";
import { getNotes } from "@/app/_lib/queries";

async function NotesList() {
  const notes = await getNotes();

  const isEmpty = notes.length === 0;

  if (isEmpty)
    return (
      <p className="text-lg font-semibold">
        Looks like you don&apos;t have any note yet
      </p>
    );

  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-10">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </ul>
  );
}

export default NotesList;
