const categoriesModel = require('../models/categoriesModel');

const fetchAll = async (req, res) => {
  const authors = await categoriesModel.fetchAll();

  return res.status(200).json(authors);
};

const createCategory = async (req, res) => {
  await categoriesModel.createCategory(req.body);

  return res.status(201).json({ status: 201, message: 'Category created success!' });
};

module.exports = {
  fetchAll,
  createCategory
};