"use client";

import EditNoteForm from "@/app/_components/EditNoteForm";
import Modal from "@/app/_components/Modal";
import { Note } from "@/app/_lib/types";
import { Pen } from "lucide-react";
import { useState } from "react";

type Props = {
  note: Note;
};

function EditNoteTrigger({ note }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

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
        <Modal isOpen={isOpen} action={closeModal}>
          <EditNoteForm setIsOpen={setIsOpen} note={note} />
        </Modal>
      )}
    </>
  );
}

export default EditNoteTrigger;
