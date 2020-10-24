const Service = require('../services/user.service');

exports.getAll = async (req, res) => {
  try {
    const result = await Service.find();
    res.json(result);
  } catch (error) {
    res.json(error.message, error.status);
  }
};
