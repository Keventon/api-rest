import fastify from "fastify";
import { knex } from "./database.ts";
import crypto from "node:crypto";
import { env } from "./env/index.ts";

const app = fastify();

app.get("/", async (request, reply) => {
  const transactions = await knex("transactions")
    .where("amount", 1000)
    .select("*");

  return { transactions };
});

app.listen({ port: env.PORT }).then(() => {
  console.log("HTTP Server is running on http://localhost:3333");
});
