"use server";

import { authedProcedure } from "@/app/_lib/actionProcedures";
import { getNotes, getUserEvents } from "@/app/_lib/queries";
import {
  changeNoteSchema,
  eventSchema,
  NoteSchema,
} from "@/app/_lib/zodSchemas";
import { db } from "@/app/db";
import { events, notes } from "@/app/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

// notes

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
  .handler(async ({ input }) => {
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

// events/calendar

export const addEvent = authedProcedure
  .createServerAction()
  .input(eventSchema)
  .handler(async ({ input, ctx }) => {
    try {
      const { userId } = ctx;
      const newEvent = {
        title: input.title,
        description: input.description,
        start: new Date(input.start),
        end: new Date(input.end),
        userId,
      };
      await db.insert(events).values(newEvent);
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    }

    revalidatePath("/account/calendar");
  });

export const deleteEvent = authedProcedure
  .createServerAction()
  .input(
    z.object({
      eventId: z.number(),
    }),
  )
  .handler(async ({ input }) => {
    try {
      const usersEvents = await getUserEvents();
      const isUsersEvent = usersEvents.some(
        (event) => event.id === input.eventId,
      );

      if (!isUsersEvent) throw new Error("Unauthorized");

      await db.delete(events).where(eq(events.id, input.eventId));
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    }

    // revalidatePath("account/calendar");
    redirect("account/calendar");
  });
