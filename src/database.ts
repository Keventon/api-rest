import setupKnex, { Knex } from "knex";
import "dotenv/config";
import { env } from "./env/index.ts";

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_URL === "sqlite"
      ? { filename: env.DATABASE_URL }
      : env.DATABASE_URL,
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./database/migrations",
  },
};

export const knex = setupKnex(config);
