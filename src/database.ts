import setupKnex, { Knex } from "knex";
import "dotenv/config";
import { env } from "./env/index.ts";

export const config: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./database/migrations",
  },
};

export const knex = setupKnex(config);
