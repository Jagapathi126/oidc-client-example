import crypto from "crypto";

import ClientManager from "../clients";

export default class LoginService {
  static renderLogin(req, res, next) {
    req.session.state = crypto.randomBytes(16).toString('hex');
    req.session.nonce = crypto.randomBytes(16).toString('hex');
    console.log(req.protocol + "://" + req.get("host") + "/cb");
    let client = ClientManager.getById(req.session.client_id);
    const authorizationRequest = {
      claims: {
        id_token: { email_verified: null },
        userinfo: { sub: null, email: null },
      },
      redirect_uri: req.protocol + "://" + req.get("host") + "/cb",
      scope: "openid email",
      state: req.session.state,
      nonce: req.session.nonce,
    };

    const authz = client.authorizationUrl(authorizationRequest);

    res.redirect(authz);
    next();
  }

  static authorizationCallback(req, res, next) {
    const state = req.session.state;
    delete req.session.state;
    const nonce = req.session.nonce;
    delete req.session.nonce;
    let client = ClientManager.getById(req.session.client_id);
    const params = client.callbackParams(req);
    client.authorizationCallback(req.protocol + "://" + req.get("host") + "/cb", params, { nonce, state }).then((token) => {
      req.session.token = token;
      req.session.loggedIn = true;
      res.redirect('/user');
      next();
    });
  }
} 