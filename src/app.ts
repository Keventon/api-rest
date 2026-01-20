import fastify from "fastify";
import { env } from "./env/index.ts";
import { transactionsRoutes } from "./routes/transactions.ts";
import cookie from "@fastify/cookie";

export const app = fastify();

// app.addHook("preHandler", async (request, reply) => {
//   console.log(`[${new Date().toISOString()}] ${request.method} ${request.url}`);
// });

app.register(cookie);
app.register(transactionsRoutes, {
  prefix: "transactions",
});
