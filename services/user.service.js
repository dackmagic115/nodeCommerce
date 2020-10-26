const User = require('../models/user');

exports.signup = async (user) => {
  const userModel = new User(user);
  const insertEntry = await userModel.save();

  return insertEntry;
};
