import CardButtons from "@/app/_components/CardButtons";
import NoteCardTitle from "@/app/_components/NoteCardTitle";
import { formatContent } from "@/app/_lib/utils";

type Props = {
  note: {
    title: string;
    created_at: Date;
    body: string;
    userId: string;
    id: number;
  };
};

function NoteCard({ note }: Props) {
  const { title, created_at, body } = note;

  return (
    <div className="flex min-h-72 cursor-pointer flex-col gap-10 rounded-lg border-2 border-secondary/40 bg-bg1 px-6 py-4 shadow-md transition-[border] duration-300 hover:border-primary/80">
      <NoteCardTitle title={title} created_at={created_at} />
      <pre className="whitespace-pre-line text-primary">
        {formatContent(body, 125)}
      </pre>
      <CardButtons />
    </div>
  );
}

export default NoteCard;
