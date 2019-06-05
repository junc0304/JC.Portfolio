const express = require('express');
const router = express.Router();
const httpExceptionHandler = require('../classes/HttpResponseException/httpResponseException');

const passport = require('passport');
const passportJWT = passport.authenticate('jwt', { session: false });

router.route('/')
  .post(passportJWT, (req, res, next) => {
    var profileController = req.container.resolve('profileController');
    try {
      res.send(profileController.getProfile(req.body.profile));
    } catch (err) {
      return new httpExceptionHandler(400, err);
    }
  });

router.route('/create')
  .post(passportJWT, (req, res, next) => {
    var profileController = req.container.resolve('profileController');
    try {
      profileController.createProfile(req.body.profile);
    } catch (err) {
      return new httpExceptionHandler(400, err);
    }
  });

router.route('/update')
  .post(passportJWT, (req, res, next) => {
    var profileController = req.container.resolve('profileController');
    try {
      profileController.updateProfile(req.body.profile);
    } catch (err) {
      return new httpExceptionHandler(400, err);
    }
  });

router.route('/delete')
  .post(passportJWT, (req, res, next) => {
    var profileController = req.container.resolve('profileController');
    try {
      profileController.deleteProfile(req.body.profile);
    } catch (err) {
      return new httpExceptionHandler(400, err);
    }
  });

  module.exports = router;