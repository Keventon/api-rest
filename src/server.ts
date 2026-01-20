import { app } from "./app.ts";
import { env } from "./env/index.ts";

app.listen({ port: env.PORT }).then(() => {
  console.log("HTTP Server is running on http://localhost:3333");
});
