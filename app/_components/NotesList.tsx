import NoteCard from "@/app/_components/NoteCard";
import { getNotes } from "@/app/db/queries";

async function NotesList() {
  const notes = await getNotes();

  if (notes.length === 0)
    return (
      <p className="text-lg font-semibold">
        Looks like you don&apos;t have any note yet
      </p>
    );

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-10">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NotesList;
