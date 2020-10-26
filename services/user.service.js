const { errorHandler } = require('../helpers/dbErrorHandler');
const User = require('../models/user');

exports.signup = async (user) => {
  const userModel = new User(user);

  return userModel.save();
};
