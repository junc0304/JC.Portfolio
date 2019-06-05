const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
  id :        {type: String, index: true}, 
  school:     {type: String}, 
  major:      [{type: String}],
  level:      {type: String}, 
  postDate:   {type: Date, default: new Date.now()}, 
  startDate:  {type: Date}, 
  endDate:    {type: Date}, 
  graduated:  {type: Boolean, default: true}, 
  stack:      [{type: String}], 
  tags:       [{type: String}],
  viewCount:  {type: Number}
});

module.exports = EducationSchema;//mongoose.model('Education', EducationSchema);