import { PlusIcon } from "lucide-react";

function AddNoteButton() {
  return (
    <button
      className="rounded-full bg-primary p-2 text-bg1 transition-colors duration-300 hover:bg-primary/60"
      aria-label="Add new note"
    >
      <PlusIcon size={24} />
    </button>
  );
}

export default AddNoteButton;
