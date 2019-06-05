const express = require('express');
const router = express.Router();
const httpExceptionHandler = require('../classes/HttpResponseException/httpResponseException');

const passport = require('passport');
const passportJWT = passport.authenticate('jwt', { session: false });

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