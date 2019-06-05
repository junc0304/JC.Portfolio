const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  id :        {type: String, index: true}, 
  company:    {type: String}, 
  position:   {type: String}, 
  postDate:   {type: Date, default: new Date.now()}, 
  startDate:  {type: Date}, 
  endDate:    {type: Date}, 
  isActive:   {type: Boolean, default: true}, 
  stack:      [{type: String}], 
  tags:       [{type: String}],
  viewCount:  {type: Number}
});

module.exports = JobSchema;