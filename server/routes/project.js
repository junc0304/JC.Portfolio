const express = require('express');
const router = express.Router();
const httpExceptionHandler = require('../classes/HttpResponseException/httpResponseException');

const passport = require('passport');
const passportJWT = passport.authenticate('jwt', { session: false });

router.route('/all')
  .post(passportJWT, (req, res, next) => {
    var projectController = req.container.resolve('projectController');
    try {
      res.send(projectController.getProjectList(req.body.project));
    } catch (err) {
      return new httpExceptionHandler(400, err);
    }
  });

router.route('/create')
  .post(passportJWT, (req, res, next) => {
    var projectController = req.container.resolve('projectController');
    try {
      projectController.createProjectItem(req.body.project);
    } catch (err) {
      return new httpExceptionHandler(400, err);
    }
  });

router.route('/update')
  .post(passportJWT, (req, res, next) => {
    var projectController = req.container.resolve('projectController');
    try {
      projectController.updateProjectItem(req.body.project);
    } catch (err) {
      return new httpExceptionHandler(400, err);
    }
  });

router.route('/delete')
  .post(passportJWT, (req, res, next) => {
    var projectController = req.container.resolve('projectController');
    try {
      projectController.deleteProjectItem(req.body.project);
    } catch (err) {
      return new httpExceptionHandler(400, err);
    }
  });

  module.exports = router;