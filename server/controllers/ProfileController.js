const httpExceptionHandler = require('../classes/HttpResponseException/httpResponseException');

class ProfileController {
  constructor(profileDataAdapter) {
    this.profileDataAdapter = profileDataAdapter;
  }

  getProfile(id, profileId=null) {
    var result;
    try {
      result = this.profileDataAdapter.getProfile(id, profileId?profileId:null)
    } catch (err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }

  createProfile(id, profile) {
    var result;
    try {
      result = this.profileDataAdapter.createProfile(id, profile)
    } catch(err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }

  updateProfile(id, profileId, change) {
    var result;
    try{
      result = this.profileDataAdapter.updateProfile(id, change);
    } catch(err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }

  deleteProfile(id) {
    var result;
    try {
      result = profileDataAdapter.deleteProfile(id);
    } catch(err) {
      throw new httpExceptionHandler(400, err);
    }
    return result;
  }
}

module.exports = ProfileController;