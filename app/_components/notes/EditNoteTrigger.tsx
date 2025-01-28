"use client";

import EditNoteForm from "@/app/_components/notes/EditNoteForm";
import Modal from "@/app/_components/Modal";
import { Note } from "@/app/_lib/types";
import { Pen } from "lucide-react";
import { useState } from "react";
import useServerActionWithToast from "@/app/_lib/hooks/useSeverActionWithToast";
import { editNote } from "@/app/_lib/actions";

type Props = {
  note: Note;
};

function EditNoteTrigger({ note }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const { isPending, execute } = useServerActionWithToast(editNote, setIsOpen, {
    successMessage: "Note edited!",
    errorMessage: "Couldn't edit your note",
  });

  return (
    <>
      <button
        aria-label="edit a note"
        className="text-primary transition-colors duration-300 hover:text-primary/50"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
      >
        <Pen size={26} />
      </button>

      {isOpen && (
        <Modal isOpen={isOpen} action={closeModal} isPending={isPending}>
          <EditNoteForm
            setIsOpen={setIsOpen}
            note={note}
            isPending={isPending}
            execute={execute}
          />
        </Modal>
      )}
    </>
  );
}

export default EditNoteTrigger;
