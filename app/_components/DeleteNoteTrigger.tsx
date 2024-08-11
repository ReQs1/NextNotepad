"use client";

import Modal from "@/app/_components/Modal";
import { Trash } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import DeleteNoteModal from "@/app/_components/DeleteNoteModal";

type Props = {
  noteId: number;
};

function DeleteNoteTrigger({ noteId }: Props) {
  const [isOpen, setIsOpen] = useState(false);

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
          <Modal isOpen={isOpen} action={setIsOpen}>
            <DeleteNoteModal setIsOpen={setIsOpen} noteId={noteId} />
          </Modal>,
          document.body,
        )}
    </>
  );
}

export default DeleteNoteTrigger;
