import express from "express";
import schema from "./graphql/schema.js";

const app = express();

schema.applyMiddleware({
  app: app
});

app.listen(4000, () => console.log(`Express server running on port 4000`));
