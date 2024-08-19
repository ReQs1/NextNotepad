import { getCurrentNote } from "@/app/_lib/queries";
import { formatDate } from "@/app/_lib/utils";
import DeleteNoteTrigger from "@/app/_components/DeleteNoteTrigger";
import EditNoteTrigger from "@/app/_components/EditNoteTrigger";

type Props = {
  currNote: string;
};

async function CurrentNoteModalContent({ currNote }: Props) {
  const note = await getCurrentNote(Number(currNote));
  const { id: noteId, title, body, created_at } = note;
  return (
    <div className="flex max-h-[450px] w-full max-w-[750px] flex-col gap-6 rounded-xl border-2 bg-bg1 px-4 py-5 sm:px-6">
      <div className="flex flex-col gap-1">
        <h2 className="break-words text-xl font-semibold text-primary md:text-2xl">
          {title}
        </h2>
        <p className="text-sm text-secondary md:text-base">
          {formatDate(created_at)}
        </p>
      </div>
      <p className="overflow-auto whitespace-pre-line">{body}</p>

      <div className="mt-auto flex items-center gap-4">
        <DeleteNoteTrigger noteId={noteId} />
        <EditNoteTrigger note={note} />
      </div>
    </div>
  );
}

export default CurrentNoteModalContent;
