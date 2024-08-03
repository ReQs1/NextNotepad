"use server";

import { addProcedure } from "@/app/_lib/actionProcedures";
import { db } from "@/app/db";
import { revalidatePath } from "next/cache";
import { notes } from "@/app/db/schema";
import { addNoteSchema } from "@/app/_lib/zodSchemas";

export const addNote = addProcedure
  .createServerAction()
  .input(addNoteSchema)
  .handler(async ({ input, ctx }) => {
    try {
      const newNote = {
        title: input.title,
        body: input.body,
        userId: ctx,
      };
      await db.insert(notes).values(newNote);
    } catch (error) {
      throw new Error("Something went wrong");
    }

    revalidatePath("/account/notepad");
  });
