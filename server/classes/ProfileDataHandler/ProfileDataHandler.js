const Profile = require('../../models/Profile');
const ProjectSchema = require('../../models/Project');
const JobSchema = require('../../models/Job');
const EducationSchema = require('../../models/Education');

class ProfileDataHandler {
  constructor() {

  }
  //profile
  async getProfile(id) {
    var result;
    try {
      result = await Profile.findById(id);
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  async createProfile(id, profile) {
    var userProfile, result;
    try {
      userProfile = new Profile({id, ...profile});
      result = await userProfile.save();
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  async updateProfile(id, change) {
    var result;
    try {
      result = await Profile.findByIdAndUpdate(id, {$set: change});
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  async deleteProfile(id) {
    var result;
    try {
      result = await Profile.findByIdAndDelete(id);
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  //project
  async getProjectItem(id, num = 100) {
    var userProfile, result;
    try {
      userProfile = await Profile.findById(id);
      result = await userProfile.projects.sort(endDate, -1).limit(num);
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  async createProjectItem(id, ProjectItem) {
    var userProfile, result;
    try {
      userProfile = await Profile.findById(id);
      userProfile.projects.push(new ProjectSchema(ProjectItem));
      result = await userProfile.save();
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  async updateProjectItem(id, jobId, change) {
    var userProfile, result;
    try {
      userProfile = await Profile.findById(id);
      await userProfile.projects.findById(jobId).set(change);
      result = await userProfile.save();
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  async deleteProjectItem(id, jobId) {
    var userProfile, userProject, result;
    try {
      userProfile = await Profile.findById(id);
      userProject = await userProfile.projects.findById(jobId);
      result = await userProject.delete();
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  //job  
  async getJobItem(id, num = 100) {
    var userProfile, result;
    try {
      userProfile = await Profile.findById(id);
      result = await userProfile.job.sort(endDate, -1).limit(num);
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  async createJobItem(id, JobItem) {
    var userProfile, result;
    try {
      userProfile = await Profile.findById(id);
      userProfile.jobs.push(new JobSchema(JobItem));
      result = await userProfile.save();
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  async updateJobItem(id, jobId, change) {
    var userProfile, result;
    try {
      userProfile = await Profile.findById(id);
      await userProfile.jobs.findById(jobId).set(change);
      result = await userProfile.save();
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  async deleteJobItem(id, jobId) {
    var userProfile, userJob, result;
    try {
      userProfile = await Profile.findById(id);
      userJob = await userProfile.jobs.findById(jobId);
      result = await userJob.delete();
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  //education
  async getEducationItem(id, num = 100) {
    var userProfile, result;
    try {
      userProfile = await Profile.findById(id);
      result = await userProfile.education.sort(endDate, -1).limit(num);
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  async createEducationItem(id, EducationItem) {
    var userProfile, result;
    try {
      userProfile = await Profile.findById(id);
      userProfile.educations.push(new EducationSchema(EducationItem));
      result = await userProfile.save();
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  async updateEducationItem(id, educationId, change) {
    var userProfile, result;
    try {
      userProfile = await Profile.findById(id);
      await userProfile.educations.findById(educationId).set(change);
      result = await userProfile.save();
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  async deleteEducationItem(id, educationId) {
    var userProfile, userEducation, result;
    try {
      userProfile = await Profile.findById(id);
      userEducation = await userProfile.educations.findById(educationId);
      result = await userEducation.delete();
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = ProfileDataHandler;