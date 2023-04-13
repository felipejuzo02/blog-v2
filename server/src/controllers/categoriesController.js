const categoriesModel = require('../models/categoriesModel');

const fetchAll = async (req, res) => {
  const authors = await categoriesModel.fetchAll();

  return res.status(200).json(authors);
};

module.exports = {
  fetchAll
};