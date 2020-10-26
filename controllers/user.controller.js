const Service = require('../services/user.service');
const { errorHandler } = require('../helpers/dbErrorHandler');
exports.signUp = async (req, res) => {
  try {
    const result = await Service.signup(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: errorHandler(error.message) });
  }
};
