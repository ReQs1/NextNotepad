import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: varchar("id", { length: 124 }).primaryKey(),
  username: text("username"),
  email: varchar("email"),
  image: text("image"),
  created_at: timestamp("created_at").defaultNow(),
});

export const notes = pgTable("notes", {
  id: serial("id").primaryKey(),
  userId: serial("user_id").references(() => users.id),
  title: varchar("title", { length: 256 }),
  body: text("body"),
  created_at: timestamp("created_at").defaultNow(),
});
