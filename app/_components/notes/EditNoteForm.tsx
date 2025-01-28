"use client";

import CloseModalButton from "@/app/_components/CloseModalButton";
import { Note } from "@/app/_lib/types";
import { NoteSchema } from "@/app/_lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  note: Note;
  execute: any;
  isPending: boolean;
};

function EditNoteForm({ setIsOpen, note, execute, isPending }: Props) {
  const { title, body, id: noteId } = note;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof NoteSchema>>({
    resolver: zodResolver(NoteSchema),
    defaultValues: {
      title,
      body,
    },
  });

  return (
    <div className="relative w-full max-w-[600px] rounded-xl border-2 border-gray-200 bg-bg1 px-3 py-5 shadow-lg sm:p-6">
      <h2 className="mb-4 text-2xl font-semibold text-primary">Add a note</h2>
      <CloseModalButton setIsOpen={setIsOpen} />

      <form onSubmit={handleSubmit((values) => execute({ ...values, noteId }))}>
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
            {isPending ? "Updating..." : "Update note"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditNoteForm;
