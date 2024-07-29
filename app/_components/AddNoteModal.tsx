"use client";

import { PlusIcon } from "lucide-react";
import { useState } from "react";

function AddNoteModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="rounded-full bg-primary p-2 text-bg1 transition-colors duration-300 hover:bg-primary/60"
        aria-label="Open modal to add a note"
      >
        <PlusIcon size={24} />
      </button>
    </>
  );
}

export default AddNoteModal;
