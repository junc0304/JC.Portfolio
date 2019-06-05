const httpExceptionHandler = require('../classes/HttpResponseException/httpResponseException');

class EducationController {
  constructor(profileDataAdapter) {
    this.profileDataAdapter = profileDataAdapter;
  }
  getEducationList(id, educationId=null) {
    var result;
    try {
      result = this.profileDataAdapter.getEducationList(id, educationId)
    } catch (err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }

  createEducationItem(id, educationItem) {
    var result;
    try {
      result = this.profileDataAdapter.createEducationItem(id, educationItem)
    } catch (err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }

  updateEducationItem(id, educationId, change) {
    var result;
    try {
      result = this.profileDataAdapter.updateEducationItem(id, educationId, change)
    } catch (err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }

  deleteEducationItem(id, educationId) {
    var result;
    try {
      result = this.profileDataAdapter.deleteEducationItem(id, educationId)
    } catch (err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }
}

module.exports = EducationController;