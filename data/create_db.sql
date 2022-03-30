BEGIN;

-- Il faut supprimer les tables avant de les créer
DROP TABLE IF EXISTS "list", "card", "status" CASCADE;

/* Table liste */
CREATE TABLE "list"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(40) NOT NULL DEFAULT '',
    "color" CHAR(7),
    "position" INTEGER NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);


/* Table status */
CREATE TABLE "status"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(40) NOT NULL DEFAULT '',
    "color" CHAR(7)
);

/* Table carte */
CREATE TABLE "card"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" VARCHAR(40) NOT NULL DEFAULT '',
    "position" INTEGER NOT NULL,
    "status_id" INTEGER NOT NULL REFERENCES "status"("id"),
    "list_id" INTEGER NOT NULL REFERENCES "list"("id"),
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

-- ALTER TABLE "card"
-- ADD FOREIGN KEY ("status_id") REFERENCES "status"("id");

/* Seeding */


INSERT INTO "list" ("name", "color", "position")
VALUES ('Première liste', '#202020', 1);

INSERT INTO "status" ("name", "color")
VALUES ('A faire', '#F0F'),
        ('En cours', '#F00'),
        ('En attente', '#00F'),
        ('Fait', '#0F0');

INSERT INTO "card" ("title", "position", "status_id", "list_id")
VALUES ('Carte 1', 1, 1, 1),
       ('2ème carte', 2, 1, 1);

COMMIT;