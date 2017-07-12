import express from 'express';

let router = express.Router();

router.use(() => {
  console.log(`In middleware`);
});

router.get(`/login`, () => {

});

router.get('/refresh', () => {

});

router.get('/cb', () => {

});

router.post('/cb', () => {

});

router.get('/user', () => {

});

module.exports = router;