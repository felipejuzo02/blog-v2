const authorsModel = require('../models/authorsModel');

const getAll = async (req, res) => {
  const authors = await authorsModel.getAll();

  return res.status(200).json(authors);
};

const fetchAuthor = async (req, res) => {
  const { id } = req.params;

  const author = await authorsModel.fetchAuthor(id);

  return res.status(200).json(author);
};

const createAuthor = async (req, res) => {
  await authorsModel.createAuthor(req.body);

  return res.status(201).json({ status: 201, message: 'Author created success!' });
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
  fetchAuthor,
  createAuthor,
  deleteAuthor,
  updateAuthor
};