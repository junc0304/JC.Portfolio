const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  id:           {type: String, index: true}, 
  email:        {type: String, required: true},
  password:     {type: String, required: true},
  nickName:     {type: String, required: true},
  lastName:     {type: String},
  firstName:    {type: String},
  address:      {type: String},
  phone:        {type: String},
  linkedIn:     {type: String},
  facebook:     {type: String},
  profile:      {type: mongoose.Types.ObjectId}
});

UserSchema.pre('save', async function (next) {
  try {
      const salt = await bcrypt.genSalt(13);
      const passwordHash = await bcrypt.hash(this.password, salt);
      this.password = passwordHash;
      next();
  }
  catch(error) {
      next(error);
  }
});

userSchema.pre('findByIdAndUpdate', async function (next) {
  try {
      const updates = this.getUpdate();
      if(typeof updates.$set == 'undefined' || !updates.$set.password) {
          return next();
      }
      const salt = await bcrypt.genSalt(13);
      this.getUpdate().$set.password = await bcrypt.hash( updates.$set.password ,salt);
      next();
  }
  catch (error) {
      next(error);
  }
});

UserSchema.methods.isValidPassword = async function (newPassword) {
  try {
      return await bcrypt.compare(newPassword, this.password);
  }
  catch (error) {
      return new Error(error);
  }
}

module.exports = mongoose.model('User', UserSchema);