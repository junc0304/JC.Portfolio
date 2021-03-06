const httpExceptionHandler = require('../classes/HttpResponseException/httpResponseException');

class JobController {
  constructor(profileDataAdapter) {
    this.profileDataAdapter = profileDataAdapter;
  }
  getJobList() {
    var result;
    try {
      result = this.profileDataAdapter.getJobList(id)
    } catch (err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }

  createJobItem(jobItem) {
    var result;
    try {
      result = this.profileDataAdapter.createJobItem(id, jobItem);
    } catch (err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }

  updateJobItem(id, change) {
    var result;
    try {
      result = this.profileDataAdapter.updateJobItem(id, change);
    } catch (err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }

  deleteJobItem(id) {
    var result;
    try {
      result = this.profileDataAdapter.deleteJobItem(id);
    } catch (err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }
}

module.exports = JobController;