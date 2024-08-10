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

  return (
    <>
      <button
        aria-label="edit a note"
        className="text-primary transition-colors duration-300 hover:text-primary/50"
        onClick={() => setIsOpen(true)}
      >
        <Pen size={26} />
      </button>

      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <EditNoteForm setIsOpen={setIsOpen} note={note} />
        </Modal>
      )}
    </>
  );
}

export default EditNoteTrigger;
