const Category = require('../models/category');

exports.create = async (params) => {
  const categoryModel = new Category(params);

  return categoryModel.save();
};
