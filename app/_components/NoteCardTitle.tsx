import { formatBody, formatDate } from "@/app/_lib/utils";

type Props = {
  title: string;
  created_at: string;
};

function NoteCardTitle({ title, created_at }: Props) {
  return (
    <div className="grid gap-1">
      <h2 className="text-xl font-bold text-primary">
        {formatBody(title, 20)}
      </h2>
      <p className="text-sm font-medium text-secondary">
        {formatDate(created_at)}
      </p>
    </div>
  );
}

export default NoteCardTitle;
