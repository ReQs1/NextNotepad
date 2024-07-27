import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const notes = pgTable("notes", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").notNull(),
  title: varchar("title", { length: 40 }).notNull(),
  body: varchar("body", { length: 1000 }).notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
});
