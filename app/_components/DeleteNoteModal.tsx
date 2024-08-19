"use client";

import CloseModalButton from "@/app/_components/CloseModalButton";
import { deleteNote } from "@/app/_lib/actions";
import { TriangleAlert } from "lucide-react";
import { useTheme } from "next-themes";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { useServerAction } from "zsa-react";

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  noteId: number;
};

function DeleteNoteModal({ setIsOpen, noteId }: Props) {
  const { theme } = useTheme();

  const toastStyle = {
    background: `${theme === "light" ? "rgb(255 255 255) " : "rgb(34 34 34)"}`,
    color: `${theme === "light" ? "rgb(17 24 39)" : "rgb(238 238 238)"}`,
  };

  const { isPending, execute } = useServerAction(deleteNote, {
    onSuccess: () => {
      toast.success("Note successfully deleted", {
        style: toastStyle,
      });
      setIsOpen(false);
    },
    onError: () => {
      toast.error("Something went wrong", {
        style: toastStyle,
      });
    },
  });

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
