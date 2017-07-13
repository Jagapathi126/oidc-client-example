import express from 'express';
import LoginService from "./services/login.service";
import UserService from "./services/user.service";

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

module.exports = router;