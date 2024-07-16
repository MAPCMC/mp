import {
  pgTable,
  pgSchema,
  serial,
  text,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";

// quotation_requests
export const quotationRequest = pgSchema("quotation_request");
export const quotationRequestStatus = quotationRequest.enum("status", [
  "new",
  "in-progress",
  "accepted",
  "rejected",
  "archived",
]);

export const quotationRequestTable = pgTable("quotation_requests", {
  id: serial("id").primaryKey(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: text("email").notNull(),
  phone: varchar("phone", { length: 256 }),
  text: text("text").notNull(),
  file: text("file"),
  status: quotationRequestStatus("status").notNull().default("new"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

// job_offers
export const jobOffer = pgSchema("job_offer");
export const jobOfferStatus = jobOffer.enum("status", [
  "new",
  "in-progress",
  "accepted",
  "rejected",
  "archived",
]);

export const jobOfferTable = pgTable("job_offers", {
  id: serial("id").primaryKey(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: text("email").notNull(),
  phone: varchar("phone", { length: 256 }),
  url: text("url"),
  text: text("text").notNull(),
  status: jobOfferStatus("status").notNull().default("new"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

// files (part of quotation_requests)
export const fileTable = pgTable("files", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  url: text("url").notNull(),
  mimeType: text("mime_type").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const messageTable = pgTable("messages", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  text: text("text").notNull(),
});

export type InsertquotationRequest = typeof quotationRequestTable.$inferInsert;
export type SelectquotationRequest = typeof quotationRequestTable.$inferSelect;

export type InsertjobOffer = typeof jobOfferTable.$inferInsert;
export type SelectjobOffer = typeof jobOfferTable.$inferSelect;

export type InsertMessage = typeof messageTable.$inferInsert;
export type SelectMessage = typeof messageTable.$inferSelect;

export type InsertFile = typeof fileTable.$inferInsert;
export type SelectFile = typeof fileTable.$inferSelect;
