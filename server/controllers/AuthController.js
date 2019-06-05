const passport = require('passport');
const JWT = require('jsonwebtoken');

const httpExceptionHandler = require('../classes/HttpResponseException/httpResponseException');
const {JWT_SECRET, JWT_EXPIRY} =require('../config');

const signToken = ({user}) => {
  return JWT.sign({
    iss: 'JCWeb',
    sub: user.id,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + JWT_EXPIRY)
  }, JWT_SECRET);
};

class AuthController {
  constructor(userDataHandler){
    this.userDataHandler = userDataHandler;
  }

  signUp(signUpItem) {
    var result;
    try {
      if(this.userDataHandler.getUser(signUpItem.email)) { 
        throw new Error('email exists');
      }
      result = this.userDataHandler.createUser(signUpItem);
    } catch (err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }

  signIn(authItem) {
    var result;
    try {
      result = signToken(authItem);
    } catch (err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }
}

module.exports = AuthController;