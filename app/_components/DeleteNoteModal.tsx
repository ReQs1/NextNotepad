"use client";

import Modal from "@/app/_components/Modal";
import DeleteNoteModalContent from "@/app/_components/DeleteNoteModalContent";
import { Trash } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  noteId: number;
};

function DeleteNoteButton({ noteId }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        aria-label="delete a note"
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
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <DeleteNoteModalContent setIsOpen={setIsOpen} noteId={noteId} />
          </Modal>,
          document.body,
        )}
    </>
  );
}

export default DeleteNoteButton;
