CREATE TABLE IF NOT EXISTS "consultations" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(256) NOT NULL,
	"name" text NOT NULL,
	"phone" varchar(10) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "consultations_email_unique" UNIQUE("email")
);
