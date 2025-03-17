import { defineConfig } from "drizzle-kit";

function assert(variable: string) {
	const env = process.env[variable];
	if (!env) {
		console.error("Found: ", env);
		throw new Error(`Env variable ${variable} not found. Please include it with a non-empty value`);
	}
	return env;
}

const url = new URL(assert("DATABASE_URL"));
export const credentials = url;
export default defineConfig({
	schema: "./server/db/schema.ts",
	dbCredentials: {
		url: url.href,
	},
	verbose: true,
	strict: false,
	out: "./server/db/drizzle",
	dialect: "postgresql",
});
