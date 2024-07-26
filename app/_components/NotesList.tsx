import { mockedData } from "../_lib/mock-data";
import NoteCard from "@/app/_components/NoteCard";

function NotesList() {
  const notes = mockedData;

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-10">
      {notes.map((note, index) => (
        <NoteCard key={index} note={note} />
      ))}
    </div>
  );
}

export default NotesList;
