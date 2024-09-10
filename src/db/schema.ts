import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const goals = pgTable("goals", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  desiredWeeklyFrequency: text("desired_weekly_frequency").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const goalCompletions = pgTable("goal_completions", {
  id: text("id").primaryKey(),
  goalId: text("goal_id")
    .references(() => goals.id)
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
