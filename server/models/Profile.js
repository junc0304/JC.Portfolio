const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = require('./Project');
const JobSchema = require('./Job');
const EducationSchema = require('./Education');

const ProfileSchema = new Schema({
  id :          {type: String, index: true}, 
  lastName:     {type: String},
  firstName:    {type: String},
  jobs:         [JobSchema],
  projects:     [ProjectSchema],
  educations:   [EducationSchema],
  createdDate:  {type: Date, default: new Date.now()},
  interests:    [{type: String}],
  tags:         [{type: String}],
  viewCount:    {type: Number}
});

module.exports = mongoose.model('Profile', ProfileSchema);