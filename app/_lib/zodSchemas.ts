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

export const eventSchema = z
  .object({
    title: z
      .string()
      .min(1, "Title must contain at least 1 character")
      .max(100, "Title must contain at most 100 characters"),
    description: z
      .string()
      .min(1, "Description must be at least 1 character")
      .max(1000, "Description must contain at most 1000 characters"),
    start: z.string(),
    end: z.string(),
  })
  .superRefine((data, ctx) => {
    const startDate = new Date(data.start);
    const endDate = new Date(data.end);

    if (endDate < startDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "End date must be after start date",
        path: ["end"],
      });
    }
  });
