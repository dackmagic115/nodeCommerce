const { errorHandler } = require('../helpers/dbErrorHandler');
const Category = require('../models/category');
const Service = require('../services/category.service');

exports.categoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        error: 'Category does not exist',
      });
    }
    req.category = category;
    next();
  });
};

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

exports.read = (req, res) => {
  return res.json(req.category);
};

exports.update = (req, res) => {
  const category = req.category;
  category.name = req.body.name;
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

exports.remove = (req, res) => {
  const category = req.category;
  category.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: 'Category deleted',
    });
  });
};

exports.list = (req, res) => {
  Category.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json();
  });
};
