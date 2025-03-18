CREATE TABLE "sessions" (
	"ulid" varchar(255) PRIMARY KEY NOT NULL,
	"user_ulid" varchar(255) NOT NULL,
	"token" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "sessions_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"ulid" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"salt" varchar(255) NOT NULL,
	"is_deleted" boolean,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_ulid_users_ulid_fk" FOREIGN KEY ("user_ulid") REFERENCES "public"."users"("ulid") ON DELETE cascade ON UPDATE no action;