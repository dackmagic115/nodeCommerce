const User = require('../models/user');

exports.signup = async (params) => {
  const userModel = new User(params);
  return userModel.save();
};
