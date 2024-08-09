"use server";

import { authedProcedure } from "@/app/_lib/actionProcedures";
import { getNotes } from "@/app/_lib/queries";
import { changeNoteSchema, NoteSchema } from "@/app/_lib/zodSchemas";
import { db } from "@/app/db";
import { notes } from "@/app/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const addNote = authedProcedure
  .createServerAction()
  .input(NoteSchema)
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

export const deleteNote = authedProcedure
  .createServerAction()
  .input(z.object({ noteId: z.number() }))
  .handler(async ({ input, ctx }) => {
    try {
      const usersNotes = await getNotes();
      const isUsersNote = usersNotes.some((note) => note.id === input.noteId);
      if (!isUsersNote) throw new Error("Unauthorized");

      await db.delete(notes).where(eq(notes.id, input.noteId));
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    }

    revalidatePath("/account/notepad");
  });

export const editNote = authedProcedure
  .createServerAction()
  .input(changeNoteSchema)
  .handler(async ({ input }) => {
    try {
      const usersNotes = await getNotes();
      const isUsersNote = usersNotes.some((note) => note.id);

      if (!isUsersNote) throw new Error("Unauthorized");

      await db
        .update(notes)
        .set({
          title: input.title,
          body: input.body,
        })
        .where(eq(notes.id, input.noteId));
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    }

    revalidatePath("/account/notepad");
  });
