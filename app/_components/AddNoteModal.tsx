"use client";

import { PlusIcon } from "lucide-react";
import { useState } from "react";
import Modal from "@/app/_components/Modal";
import AddNoteForm from "@/app/_components/AddNoteForm";

function AddNoteModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="rounded-full bg-primary p-2 text-bg1 transition-colors duration-300 hover:bg-primary/60"
        aria-label="Open modal to add a note"
        onClick={() => setIsOpen(true)}
      >
        <PlusIcon size={24} />
      </button>

      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <AddNoteForm setIsOpen={setIsOpen} />
        </Modal>
      )}
    </>
  );
}

export default AddNoteModal;
