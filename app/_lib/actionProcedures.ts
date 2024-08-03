import { auth } from "@clerk/nextjs/server";
import { createServerActionProcedure } from "zsa";

export const addProcedure = createServerActionProcedure().handler(async () => {
  try {
    const { userId } = await auth();
    return userId;
  } catch (error) {
    throw new Error("You must be logged in to add a note");
  }
});
