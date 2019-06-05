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
  }

  async createUser(userItem) {
    var userUser, result;
    try {
      userUser = new User({ ...userItem });
      result = await userUser.save();
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  async updateUser(id, change) {
    var result;
    try {
      result = await User.findByIdAndUpdate(id, { $set: {...change}});
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  async deleteUser(id) {
    var result;
    try {
      result = await User.findByIdAndDelete(id);
      console.log(result);
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = UserDataHandler;