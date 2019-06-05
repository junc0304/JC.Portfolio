const express = require('express');
const router = express.Router();
const httpExceptionHandler = require('../classes/HttpResponseException/httpResponseException');
const { validateBody, schemas } = require('../helpers/validateInput');

const passport = require('passport');
const passportLocal = passport.authenticate('local', { session: false });

router.route('/signup')
  .post( validateBody(schemas.signUp), (req, res, next) => {
    var authController = req.container.resolve('authController');
    try {
      res.send(authController.signUp(req.body.auth));
    } catch (err) {
      return new httpExceptionHandler(400, err);
    }
  });

router.route('/signin')
  .post( validateBody(schemas.signIn), passportLocal, (req, res, next) => {
  var authController = req.container.resolve('authController');
  try {
    res.send(authController.signIn(req.body.auth));
  } catch (err) {
    return new httpExceptionHandler(400, err);
  }
});


module.exports = router;