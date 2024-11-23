import { pgTable, serial, text, varchar, timestamp, } from "drizzle-orm/pg-core";

export const consultations = pgTable("consultations", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  name: text("name"),
  phone: varchar("phone", { length: 10 }).notNull(),
  studyYear: varchar("studyYear", { length: 4 }),
  studyIntake: varchar("studyIntake"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()),
});