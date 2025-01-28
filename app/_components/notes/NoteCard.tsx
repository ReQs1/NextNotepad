"use client";

import DeleteNoteTrigger from "@/app/_components/notes/DeleteNoteTrigger";
import EditNoteTrigger from "@/app/_components/notes/EditNoteTrigger";
import { Note } from "@/app/_lib/types";
import { formatContent, formatDate } from "@/app/_lib/utils/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  note: Note;
};

function NoteCard({ note }: Props) {
  const { id: noteId, title, created_at, body } = note;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("currNote", String(noteId));

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <li
      className="flex max-h-[350px] min-h-72 cursor-pointer flex-col gap-8 rounded-lg border-2 border-secondary/40 bg-bg1 p-4 shadow-md transition-[border] duration-300 hover:border-primary/80"
      onClick={handleClick}
    >
      <NoteCardTitle title={title} created_at={created_at} />
      <p className="overflow-y-hidden whitespace-pre-line break-words text-primary">
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

function NoteCardTitle({
  title,
  created_at,
}: {
  title: string;
  created_at: Date;
}) {
  return (
    <div className="grid gap-1">
      <h2 className="text-xl font-bold text-primary">
        {formatContent(title, 20)}
      </h2>
      <p className="text-sm font-medium text-secondary">
        {formatDate(created_at)}
      </p>
    </div>
  );
}
