"use client";

import CloseModalButton from "@/app/_components/CloseModalButton";
import { TriangleAlert } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  noteId: number;
  execute: any;
  isPending: boolean;
};

function DeleteNoteModal({ setIsOpen, noteId, execute, isPending }: Props) {
  return (
    <div className="relative flex w-full max-w-[425px] flex-col items-center justify-center gap-6 rounded-xl border-2 bg-bg1 px-4 py-10 sm:px-6">
      <CloseModalButton setIsOpen={setIsOpen} />

      <TriangleAlert size={48} color="red" />

      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-lg font-bold text-primary">Are you sure?</h2>
        <p className="text-sm text-secondary sm:text-base">
          This action cannot be undone. This will permanently delete the
          selected item.
        </p>
      </div>

      <div className="flex w-full justify-end gap-4 text-end">
        <button
          className="bg-1 rounded-lg border px-3 py-2 text-primary transition-colors duration-300 hover:bg-hoverAccent"
          onClick={() => setIsOpen(false)}
        >
          No
        </button>
        <button
          className="rounded-lg bg-red-500 px-3 py-2 text-white transition-colors duration-300 hover:bg-red-600"
          onClick={() => execute({ noteId })}
        >
          {isPending ? "Deleting..." : "Yes, Delete"}
        </button>
      </div>
    </div>
  );
}

export default DeleteNoteModal;
