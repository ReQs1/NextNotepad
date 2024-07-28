import { auth } from "@clerk/nextjs/server";
import { db } from "@/app/db";

export async function getNotes() {
  const session = await auth();
  const { userId } = session;

  if (!userId) throw new Error("Unauthorized");

  const notes = await db.query.notes.findMany({
    where: (notes, { eq }) => eq(notes.userId, userId),
  });

  if (!notes) throw new Error("Couldn't fetch notes");

  return notes;
}
