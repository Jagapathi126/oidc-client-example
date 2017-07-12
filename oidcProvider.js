import { Issuer } from "openid-client";

let issuer = {};

class OIDCProvider {
  static connect() {
    const ISSUER = process.env.ISSUER || 'http://localhost:3000';
    Issuer.discover(ISSUER).then((i) => {
      issuer = i;
    }).catch((e) => {
      console.log(e);
    });
  }

  static get issuer() {
    return issuer;
  }
}

OIDCProvider.connect();

module.exports = OIDCProvider;
