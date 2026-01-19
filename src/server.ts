import fastify from "fastify";
import { env } from "./env/index.ts";
import { transactionsRoutes } from "./routes/transactions.ts";

const app = fastify();

app.register(transactionsRoutes, {
  prefix: "transactions",
});

app.listen({ port: env.PORT }).then(() => {
  console.log("HTTP Server is running on http://localhost:3333");
});
