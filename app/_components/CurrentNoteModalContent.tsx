import { getCurrentNote } from "../_lib/queries";

type Props = {
  currNote: string;
};

async function CurrentNoteModalContent({ currNote }: Props) {
  const { title, body } = await getCurrentNote(Number(currNote));
  return (
    <div className="grid gap-5 bg-bg1 p-6">
      <h2>{title}</h2>
      <p className="whitespace-pre-line">{body}</p>
    </div>
  );
}

export default CurrentNoteModalContent;
