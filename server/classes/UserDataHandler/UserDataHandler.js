const User = require('../../models/User');

class UserDataHandler {
  constructor() {

  }

  async getUser(item) {
    var result;
    try {
      result = await User.findOne({ ...item });
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
    return result;
  }

  async createUser(userItem) {
    var newUser, result;
    try {
      newUser = new User({ ...userItem });
      result = await newUser.save();
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
    return result;
  }

  async updateUser(id, change) {
    var result;
    try {
      result = await User.findByIdAndUpdate(id, { $set: {...change}});
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
    return result;
  }

  async deleteUser(id) {
    var result;
    try {
      result = await User.findByIdAndDelete(id);
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
    return result;
  }
}

module.exports = UserDataHandler;