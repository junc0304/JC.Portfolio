const express = require('express');
const router = express.Router();
const httpExceptionHandler = require('../classes/HttpResponseException/httpResponseException');

const passport = require('passport');
const passportJWT = passport.authenticate('jwt', { session: false });

router.route('/')
  .post(passportJWT, (req, res, next) => {
    var educationController = req.container.resolve('educationController');
    try {
      res.send(educationController.getEducationList(req.body.education));
    } catch (err) {
      return new httpExceptionHandler(400, err);
    }
  });

router.route('/create')
  .post(passportJWT, (req, res, next) => {
    var educationController = req.container.resolve('educationController');
    try {
      educationController.createEducationItem(req.body.education);
    } catch (err) {
      return new httpExceptionHandler(400, err);
    }
  });

router.route('/update')
  .post(passportJWT, (req, res, next) => {
    var educationController = req.container.resolve('educationController');
    try {
      educationController.updateEducationItem(req.body.education);
    } catch (err) {
      return new httpExceptionHandler(400, err);
    }
  });

router.route('/delete')
  .post(passportJWT, (req, res, next) => {
    var educationController = req.container.resolve('educationController');
    try {
      educationController.deleteEducationItem(req.body.education);
    } catch (err) {
      return new httpExceptionHandler(400, err);
    }
  });

  module.exports = router;