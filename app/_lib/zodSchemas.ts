import { z } from "zod";

export const NoteSchema = z.object({
  title: z
    .string()
    .min(1, "Title must contain at least 1 character")
    .max(40, "Title must contain at most 40 characters"),
  body: z
    .string()
    .min(1, "Body must contain at least 1 character")
    .max(1000, "Body must contain at most 1000 characters"),
});

export const changeNoteSchema = z.object({
  title: z
    .string()
    .min(1, "Title must contain at least 1 character")
    .max(40, "Title must contain at most 40 characters"),
  body: z
    .string()
    .min(1, "Body must contain at least 1 character")
    .max(1000, "Body must contain at most 1000 characters"),
  noteId: z.number(),
});
