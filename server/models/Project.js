const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  id :        {type: String, index: true}, 
  title:      {type: String}, 
  members:    [{type: String}], 
  postDate:   {type: Date, default: new Date.now()}, 
  startDate:  {type: Date}, 
  endDate:    {type: Date}, 
  isActive:   {type: Boolean, default: true}, 
  stack:      [{type: String}], 
  description:{type: String},
  repo:       {type: String},
  links:      [{type: String}],
  tags:       [{type: String}],
  viewCount:  {type: Number}
});

module.exports = ProjectSchema;//mongoose.model('Project', ProjectSchema);