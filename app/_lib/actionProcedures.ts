import { auth } from "@clerk/nextjs/server";
import { createServerActionProcedure } from "zsa";

export const authedProcedure = createServerActionProcedure().handler(
  async () => {
    try {
      const { userId } = await auth();
      if (!userId) throw new Error("Unauthorized");
      return { userId };
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Something weng wrong",
      );
    }
  },
);
