import { sessions, users } from "./schema";

export namespace Drizzle {
	export namespace User {
		export type insert = typeof users.$inferInsert;
		export type select = typeof users.$inferSelect;
	}
    export namespace Session {
		export type insert = typeof sessions.$inferInsert;
		export type select = typeof sessions.$inferSelect;
	}

}