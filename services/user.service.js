const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.signup = async (params) => {
  const userModel = new User(params);
  return userModel.save();
};

exports.signin = async (params) => {
  const { email, password } = params;
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('something went wrong');
  }

  if (!user.authenticate(password)) {
    throw { message: 'email and password dont match' };
  }

  const token = jwt.sign({ _id: user.id }, config.jwtSecret);

  return {
    token: token,
    user: user,
  };
};
