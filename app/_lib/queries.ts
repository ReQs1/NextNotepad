import { auth } from "@clerk/nextjs/server";
import { db } from "@/app/db";

export async function getNotes() {
  try {
    const session = await auth();
    const { userId } = session;

    if (!userId) throw new Error("Unauthorized");

    const notes = await db.query.notes.findMany({
      where: (notes, { eq }) => eq(notes.userId, userId),
      orderBy: (notes, { desc }) => desc(notes.created_at),
    });

    if (!notes) throw new Error("Couldn't fetch notes");

    return notes;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong",
    );
  }
}

export async function getCurrentNote(id: number) {
  try {
    const session = await auth();
    const { userId } = session;

    if (!userId) throw new Error("Unauthorized");

    const note = await db.query.notes.findFirst({
      where: (notes, { eq }) => eq(notes.id, id),
    });

    if (!note) throw new Error("Couldn't fetch this note");
    if (note.userId !== userId) throw new Error("Unauthorized");

    return note;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong",
    );
  }
}
