import { formatBody, formatDate } from "@/app/_lib/utils";
import { Pen, Trash } from "lucide-react";

type Props = {
  note: {
    title: string;
    created_at: string;
    body: string;
  };
};

function NoteCard({ note }: Props) {
  const { title, created_at, body } = note;

  return (
    <div className="flex min-h-72 cursor-pointer flex-col gap-10 rounded-lg border-2 border-secondary/40 bg-bg1 px-6 py-4 shadow-md transition-[border] duration-300 hover:border-primary/80">
      <div className="grid gap-1">
        <h2 className="text-xl font-bold text-primary">
          {formatBody(title, 20)}
        </h2>
        <p className="text-sm font-medium text-secondary">
          {formatDate(created_at)}
        </p>
      </div>
      <p className="text-primary">{formatBody(body)}</p>
      <div className="mt-auto flex gap-6">
        <Trash className="text-primary" size={26} aria-label="delete a note" />
        <Pen className="text-primary" size={26} aria-label="edit a note" />
      </div>
    </div>
  );
}

export default NoteCard;
