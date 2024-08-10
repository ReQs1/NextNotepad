"use client";

import { addNote } from "@/app/_lib/actions";
import { NoteSchema } from "@/app/_lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useTheme } from "next-themes";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { useServerAction } from "zsa-react";

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function AddNoteForm({ setIsOpen }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof NoteSchema>>({
    resolver: zodResolver(NoteSchema),
    defaultValues: {
      title: "",
      body: "",
    },
  });
  const { theme } = useTheme();

  const toastStyle = {
    background: `${theme === "light" ? "rgb(255 255 255) " : "rgb(34 34 34)"}`,
    color: `${theme === "light" ? "rgb(17 24 39)" : "rgb(238 238 238)"}`,
  };

  const { isPending, execute } = useServerAction(addNote, {
    onSuccess: () => {
      toast.success("Note made!", {
        style: toastStyle,
      });
      setIsOpen(false);
    },
    onError: () => {
      toast.error("Couldn't make your note", {
        style: toastStyle,
      });
    },
  });

  return (
    <div className="relative w-full max-w-[600px] rounded-xl border-2 border-gray-200 bg-bg1 px-3 py-5 shadow-lg sm:p-6">
      <h2 className="mb-4 text-2xl font-semibold text-primary">Add a note</h2>
      <button
        onClick={() => setIsOpen(false)}
        className="absolute right-4 top-4 text-primary hover:text-primary/50"
        aria-label="close modal"
      >
        <X size={28} />
      </button>

      <form onSubmit={handleSubmit((values) => execute(values))}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-semibold">
            Title
          </label>
          <input
            id="title"
            className="w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter the title of the note"
            {...register("title")}
          />
          <p className="mt-1 text-sm text-red-500">{errors.title?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-lg font-semibold">
            Content
          </label>
          <textarea
            id="content"
            className="w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter the content of the note"
            rows={5}
            {...register("body")}
          ></textarea>
          <p className="mt-1 text-sm text-red-500">{errors.body?.message}</p>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isPending}
            className="rounded-md bg-primary p-2 font-semibold text-bg1 transition-colors duration-300 hover:bg-primary/70 disabled:bg-primary/70"
          >
            {isPending ? "Adding note..." : "Add Note"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNoteForm;
