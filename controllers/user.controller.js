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
