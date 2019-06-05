const express = require('express');
const router = express.Router();
const httpExceptionHandler = require('../classes/HttpResponseException/httpResponseException');
const { validateBody, schemas } = require('../helpers/validateInput');

const passport = require('passport');
const passportJWT = passport.authenticate('jwt', { session: false });
const passportLocal = passport.authenticate('local', { session: false });

router.route('/signup')
  .post( validateBody(schemas.signUp), (req, res, next) => {
    var authController = req.container.resolve('authController');
    try {
      authController.signUp(req.body.user);
    } catch (err) {
      return new httpExceptionHandler(400, err);
    }
  });

router.route('/signin')
  .post( validateBody(schemas.signIn), passportLocal, (req, res, next) => {
  var authController = req.container.resolve('authController');
  try {
    res.send(authController.signIn(req.body.user));
  } catch (err) {
    return new httpExceptionHandler(400, err);
  }
});

router.route('/update')
  .post( passportJWT, (req, res, next) => {
  var userController = req.container.resolve('userController');
  try {
    userController.updateUser(req.body.user);
  } catch (err) {
    return new httpExceptionHandler(400, err);
  }
});

router.route('/delete')
  .post( passportJWT,  (req, res, next) => {
  var userController = req.container.resolve('userController');
  try {
    userController.deleteUser(req.body.user);
  } catch (err) {
    return new httpExceptionHandler(400, err);
  }
});

module.exports = router;