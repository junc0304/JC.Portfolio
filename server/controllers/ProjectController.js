const httpExceptionHandler = require('../classes/HttpResponseException/httpResponseException');

class ProjectController {

  constructor(profileDataAdapter) {
    this.profileDataAdapter = profileDataAdapter;
  }

  getProjectList(id, projectId) {
    var result;
    try {
      result = this.profileDataAdapter.getProjectList(id, projectId)
    } catch (err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }

  createProjectItem(projectItem) {
    var result;
    try {
      result = this.profileDataAdapter.createProjectItem(projectItem)
    } catch (err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }

  updateProjectItem(id, projectId, change) {
    var result;
    try {
      result =  this.profileDataAdapter.updateProjectItem(id, projectId, change)
    } catch (err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }

  deleteProjectItem(id, projectId) {
    var result;
    try {
      result = this.profileDataAdapter.deleteProjectItem(id, projectId);
    } catch (err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }
}

module.exports = ProjectController;