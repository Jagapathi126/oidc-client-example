import { Issuer } from "openid-client";

let issuer = {};

class OIDCProvider {
  static connect() {
    const ISSUER = process.env.ISSUER || '10.0.2.165:3000';
    return Issuer.discover(ISSUER).then((i) => {
      return issuer = i;
    }).catch((e) => {
      console.log(e);
    });
  }

  static get issuer() {
    return issuer;
  }
}
module.exports = OIDCProvider;
