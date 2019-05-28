const express = require('express');
const router = express.Router();
import httpExceptionHandler from '../classes/httpResponseException';


router.post('/api/project/all', (req, res, next) => {
  try{
    next();
  }
  catch(err) {
    return new httpExceptionHandler(400, err);
  }

});