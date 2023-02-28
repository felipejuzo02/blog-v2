const authorsModel = require('../models/authorsModel');

const getAll = async (req, res) => {
  const authors = await authorsModel.getAll();

  return res.status(200).json(authors);
};

const createAuthor = async (req, res) => {
  const createdAuthor = await authorsModel.createAuthor(req.body);

  return res.status(201).json(createdAuthor);
};

const deleteAuthor = async (req, res) => {
  const { id } = req.params;

  await authorsModel.deleteAuthor(id);
  return res.status(204).json();
};

const updateAuthor = async (req, res) => {
  const { id } = req.params;

  await authorsModel.updateAuthor(id, req.body);

  return res.status(204).json();
};

module.exports = {
  getAll,
  createAuthor,
  deleteAuthor,
  updateAuthor
};