"use client";

import { PlusIcon } from "lucide-react";
import { useState } from "react";
import Modal from "@/app/_components/Modal";
import AddNoteForm from "@/app/_components/notes/AddNoteForm";
import useServerActionWithToast from "../../_lib/hooks/useSeverActionWithToast";
import { addNote } from "../../_lib/actions";

function AddNoteTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const { execute, isPending } = useServerActionWithToast(addNote, setIsOpen, {
    successMessage: "Note made!",
    errorMessage: "Couldn't make your note",
  });

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
        <Modal isOpen={isOpen} action={closeModal} isPending={isPending}>
          <AddNoteForm
            setIsOpen={setIsOpen}
            execute={execute}
            isPending={isPending}
          />
        </Modal>
      )}
    </>
  );
}

export default AddNoteTrigger;
