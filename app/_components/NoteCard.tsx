import NoteCardTitle from "@/app/_components/NoteCardTitle";
import { Note } from "@/app/_lib/types";
import { formatContent } from "@/app/_lib/utils";
import DeleteNoteTrigger from "@/app/_components/DeleteNoteTrigger";
import EditNoteTrigger from "@/app/_components/EditNoteTrigger";

type Props = {
  note: Note;
};

function NoteCard({ note }: Props) {
  const { id: noteId, title, created_at, body } = note;

  return (
    <li className="flex max-h-[350px] min-h-72 cursor-pointer flex-col gap-8 rounded-lg border-2 border-secondary/40 bg-bg1 px-6 py-4 shadow-md transition-[border] duration-300 hover:border-primary/80">
      <NoteCardTitle title={title} created_at={created_at} />
      <p className="overflow-hidden whitespace-pre-line text-primary">
        {formatContent(body, 125)}
      </p>
      <div className="mt-auto flex gap-6">
        <DeleteNoteTrigger noteId={noteId} />
        <EditNoteTrigger note={note} />
      </div>
    </li>
  );
}

export default NoteCard;
