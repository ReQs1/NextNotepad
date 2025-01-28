"use client";

import Modal from "@/app/_components/Modal";
import { Trash } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import DeleteNoteModal from "@/app/_components/notes/DeleteNoteModal";
import useServerActionWithToast from "../../_lib/hooks/useSeverActionWithToast";
import { deleteNote } from "../../_lib/actions";

type Props = {
  noteId: number;
};

function DeleteNoteTrigger({ noteId }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const { isPending, execute } = useServerActionWithToast(
    deleteNote,
    setIsOpen,
    {
      successMessage: "Note successfully deleted",
      errorMessage: "Something went wrong",
    },
  );

  return (
    <>
      <button
        aria-label="open delete note modal"
        className="text-primary transition-colors duration-300 hover:text-primary/50"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
      >
        <Trash size={26} />
      </button>

      {isOpen &&
        createPortal(
          <Modal isOpen={isOpen} action={closeModal} isPending={isPending}>
            <DeleteNoteModal
              setIsOpen={setIsOpen}
              noteId={noteId}
              execute={execute}
              isPending={isPending}
            />
          </Modal>,
          document.body,
        )}
    </>
  );
}

export default DeleteNoteTrigger;
