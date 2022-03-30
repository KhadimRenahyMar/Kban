BEGIN;

-- Il faut supprimer les tables avant de les créer
DROP TABLE IF EXISTS "user", "list", "card", "status" CASCADE;

/* Table user */
CREATE TABLE "users"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" VARCHAR(40) NOT NULL DEFAULT '',
    "lastname" VARCHAR(40) NOT NULL DEFAULT '',
    "email" VARCHAR(40) NOT NULL DEFAULT '',
    "password" VARCHAR(40) NOT NULL DEFAULT '',
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

/* Table liste */
CREATE TABLE "list"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(40) NOT NULL DEFAULT '',
    "user_id" INTEGER NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    //"position" INTEGER NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);


/* Table status */
CREATE TABLE "status"(
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(40) NOT NULL DEFAULT '',
    "color" CHAR(7),
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
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
INSERT INTO "users" ("firstname", "lastname", "email", "password")
VALUES ('Micheal', 'Scott', 'MScott@gmail.com', 'holly4ever');


INSERT INTO "list" ("name", "user_id")
VALUES ('Première liste', 1);

INSERT INTO "status" ("name", "color")
VALUES ('A faire', '#F00'),
        ('En cours', '#F00'),
        ('Fait', '#F00');

INSERT INTO "card" ("title", "color", "status_id", "list_id")
VALUES ('Carte 1', '#fff696', 1, 1),
       ('2ème carte', '#c1e7ff', 1, 1);

COMMIT;