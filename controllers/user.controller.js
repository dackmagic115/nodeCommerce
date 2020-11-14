const Service = require('../services/user.service');
const { errorHandler } = require('../helpers/dbErrorHandler');
exports.signUp = async (req, res) => {
  try {
    const result = await Service.signup(req.body);
    result.salt = undefined;
    result.hashed_password = undefined;
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      err: errorHandler(error),
    });
  }
};

exports.signIn = async (req, res) => {
  try {
    const signIn = await Service.signin(req.body);

    res.cookie('t', signIn.token, { expire: new Date() + 9999 });
    console.log(signIn);

    return res.json({ token: signIn.token, user: signIn.user });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.signOut = (req, res) => {
  res.clearCookie('t');
  res.json({ message: 'Signout success' });
};
