"use server";

import { authedProcedure } from "@/app/_lib/actionProcedures";
import { db } from "@/app/db";
import { revalidatePath } from "next/cache";
import { notes } from "@/app/db/schema";
import { addNoteSchema } from "@/app/_lib/zodSchemas";
import { getNotes } from "@/app/_lib/queries";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { createServerAction } from "zsa";

export const addNote = authedProcedure
  .createServerAction()
  .input(addNoteSchema)
  .handler(async ({ input, ctx }) => {
    try {
      const { userId } = ctx;
      const newNote = {
        title: input.title,
        body: input.body,
        userId,
      };
      await db.insert(notes).values(newNote);
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    }

    revalidatePath("/account/notepad");
  });

export const deleteNote = createServerAction()
  .input(z.object({ noteId: z.number() }))
  .handler(async ({ input }) => {
    try {
      const usersNotes = await getNotes();
      const usersNote = usersNotes.some((note) => note.id === input.noteId);
      if (!usersNote) throw new Error("Unauthorized");

      await db.delete(notes).where(eq(notes.id, input.noteId));
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    }

    revalidatePath("/account/notepad");
  });
