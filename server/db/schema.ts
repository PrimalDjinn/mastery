import { boolean, index, pgTable, timestamp, unique, varchar } from "drizzle-orm/pg-core";
import { ulid } from "ulid";

export const users = pgTable("users", {
	ulid: varchar("ulid", { length: 255 }).primaryKey().$defaultFn(ulid).notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	email: varchar("email", { length: 255 }).notNull().unique(),
	password: varchar("password", { length: 255 }).notNull(),
	salt: varchar("salt", { length: 255 }).notNull(),
	isDeleted: boolean("is_deleted"),
	createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
});

export const sessions = pgTable(
	"sessions",
	{
		ulid: varchar("ulid", { length: 255 }).primaryKey().$defaultFn(ulid).notNull(),
		userUlid: varchar("user_ulid", { length: 255 })
			.notNull()
			.references(() => users.ulid, { onDelete: "cascade" }),
		token: varchar("token", { length: 255 }).notNull().unique(),
		createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
	},
	(table) => [
		{
			tokenIdx: index("token_index").on(table.token),
		},
	]
);
