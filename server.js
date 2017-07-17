import express from "express";
import session from "express-session";

import OIDCProvider from "./oidcProvider";
import routes from "./routes";
import ClientManager from "./clients";
import { client } from "./config";
import LoginService from "./services/login.service";

OIDCProvider.connect().then(() => {
  ClientManager.add(client);
}).catch(err => {
  process.exit(-1);
});


const port = process.env.port || 3001;

let app = express();

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));

app.use((req, res, next) => {
  req.session.client_id = client.client_id;
  // if (req.session.token && req.url == "/login") {
  //   next();
  // } else {
  //   LoginService.renderLogin(req, res, next);
  // }
  next();
})

app.use(routes);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});