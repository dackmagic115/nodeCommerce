const Service = require('../services/category.service');
exports.create = async (req, res) => {
  try {
    const result = await Service.create(req.body);

    res.status(200).json(result).end();
  } catch (error) {
    res.status(400).json({
      err: errorHandler(error),
    });
  }
};
