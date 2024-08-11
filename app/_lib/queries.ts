import { auth } from "@clerk/nextjs/server";
import { db } from "@/app/db";

export async function getNotes() {
  const session = await auth();
  const { userId } = session;

  if (!userId) throw new Error("Unauthorized");

  const notes = await db.query.notes.findMany({
    where: (notes, { eq }) => eq(notes.userId, userId),
    orderBy: (notes, { desc }) => desc(notes.created_at),
  });

  if (!notes) throw new Error("Couldn't fetch notes");

  return notes;
}

export async function getCurrentNote(id: number) {
  const session = await auth();
  const { userId } = session;

  if (!userId) throw new Error("Unauthorized");

  const note = await db.query.notes.findFirst({
    where: (notes, { eq }) => eq(notes.id, id),
  });

  if (!note) throw new Error("Couldn't fetch user's note");

  return note;
}
