import {
	integer,
	numeric,
	pgTable,
	serial,
	varchar,
} from 'drizzle-orm/pg-core';

// Budge schema
export const Budgets = pgTable('budget', {
	id: serial('id').primaryKey(),
	name: varchar('name').notNull(),
	amount: varchar('amount').notNull(),
	Icon: varchar('icon'),
	createdBy: varchar('createdBy').notNull(),
});

// Incomes Schema
export const Incomes = pgTable('incomes', {
	id: serial('id').primaryKey(),
	name: varchar('name').notNull(),
	amount: varchar('amount').notNull(),
	Icon: varchar('icon'),
	createdBy: varchar('createdBy').notNull(),
});

// Expenses schema
export const Expenses = pgTable('expenses', {
	id: serial('id').primaryKey(),
	name: varchar('name').notNull(),
	amount: varchar('amount').notNull(),
	budgetId: integer('budgetId').references(() => Budgets.id),
	createdBy: varchar('createdBy').notNull(),
});
