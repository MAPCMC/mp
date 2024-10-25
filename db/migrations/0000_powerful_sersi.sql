CREATE TABLE IF NOT EXISTS "score" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"value" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
