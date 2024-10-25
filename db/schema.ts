import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const scores = pgTable("score", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  value: text("value").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertScore = typeof scores.$inferInsert;
export type SelectScore = typeof scores.$inferSelect;
