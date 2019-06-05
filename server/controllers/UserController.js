const httpExceptionHandler = require('../classes/HttpResponseException/httpResponseException');

class UserController {
  constructor(userDataHandler) {
    this.userDataHandler = userDataHandler;
  }

  getUser(id, userId) {
    var result;
    try {
      result = this.userDataHandler.getUserList(id, userId)
    } catch (err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }

  createUser(userItem) {
    var result;
    try {
      result = this.userDataHandler.createUserItem(userItem)
    } catch (err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }

  updateUser(id, userId, change) {
    var result;
    try {
      result = this.userDataHandler.updateUserItem(id, userId, change)
    } catch (err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }

  deleteUser(id, userId) {
    var result;
    try {
      result = this.userDataHandler.deleteUserItem(id, userId);
    } catch (err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }
}

module.exports = UserController;