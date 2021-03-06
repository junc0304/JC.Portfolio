const express = require('express');
const router = express.Router();
const httpExceptionHandler = require('../classes/HttpResponseException/httpResponseException');

const passport = require('passport');
const passportJWT = passport.authenticate('jwt', { session: false });

router.route('/')
  .post(passportJWT, (req, res, next) => {
    var jobController = req.container.resolve('jobController');
    try {
      res.send(jobController.getJobList(req.body.job));
    } catch (err) {
      return new httpExceptionHandler(400, err);
    }
  });

router.route('/create')
  .post(passportJWT, (req, res, next) => {
    var jobController = req.container.resolve('jobController');
    try {
      jobController.createJobItem(req.body.job);
    } catch (err) {
      return new httpExceptionHandler(400, err);
    }
  });

router.route('/update')
  .post(passportJWT, (req, res, next) => {
    var jobController = req.container.resolve('jobController');
    try {
      jobController.updateJobItem(req.body.job);
    } catch (err) {
      return new httpExceptionHandler(400, err);
    }
  });

router.route('/delete')
  .post(passportJWT, (req, res, next) => {
    var jobController = req.container.resolve('jobController');
    try {
      jobController.deleteJobItem(req.body.job);
    } catch (err) {
      return new httpExceptionHandler(400, err);
    }
  });

  module.exports = router;