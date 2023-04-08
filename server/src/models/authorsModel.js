const connection = require('./connection');

const getAll = async () => {
  const { rows } = await connection.query('SELECT * FROM tb_authors ORDER BY id');

  return rows;
};

const fetchAuthor = async (id) => {
  const { rows } = await connection.query(
    'SELECT * FROM tb_authors WHERE id = $1',
    [id]
  );

  return rows[0];
};

const createAuthor = async (author) => {
  const { name, email } = author;

  const dateUTC = new Date(Date.now()).toUTCString();

  const createdAuthor = await connection.query(
    'INSERT INTO tb_authors(name, email, created_at) VALUES ($1, $2, $3)',
    [name, email, dateUTC]
  );

  return createdAuthor;
};

const deleteAuthor = async (id) => {
  const removedAuthor = await connection.query(
    'DELETE FROM tb_authors WHERE id = $1',
    [id]
  );

  return removedAuthor;
};

const updateAuthor = async (id, author) => {
  const { name, email } = author;

  const updatedAuthor = await connection.query(
    'UPDATE tb_authors SET name = $1, email = $2 WHERE id = $3',
    [name, email, id]
  );

  return updatedAuthor;
};

module.exports = {
  getAll,
  fetchAuthor,
  createAuthor,
  deleteAuthor,
  updateAuthor
};