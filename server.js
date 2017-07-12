import express from "express";

import routes from "./routes";

const port = process.env.port || 3001;

let app = express();

app.use(routes);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});