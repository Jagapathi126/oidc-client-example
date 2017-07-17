import express from 'express';
import LoginService from "./services/login.service";
import UserService from "./services/user.service";
import request from "request";
import crypto from "crypto";

const decipher = crypto.createDecipher('aes-256-ctr', 'secret');

let router = express.Router();

router.use((req, res, next) => {
  console.log(`In middleware`);
  next();
});

router.get(`/login`, (req, res, next) => {
  LoginService.renderLogin(req, res, next);
});

router.get('/refresh', () => {

});

router.get('/cb', (req, res, next) => {
  LoginService.authorizationCallback(req, res, next);
});

router.get('/user', (req, res, next) => {
  UserService.renderUser(req, res, next);
});


router.get('/token1', (req, res, next) => {
  console.log(req.session.token);
  request({
    headers: {
      Authorization: req.session.token.access_token
    },
    uri: "http://10.0.2.165:3000/get-token",
    method: "GET"
  }, (err, resp, body) => {
    if (err) {
      res.json(err);
    }
    console.log("Encrypted data", body);
    let msg = decipher.update(body, 'hex', 'utf8');
    msg += decipher.final('utf8');
    console.log("Decrypted data", msg);
    res.json(body);
  });
});

module.exports = router;