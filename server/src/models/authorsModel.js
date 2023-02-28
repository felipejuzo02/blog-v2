const connection = require('./connection');

const getAll = async () => {
  const [authors] = await connection.execute('SELECT * FROM tb_authors');

  return authors;
};

const createAuthor = async (author) => {
  const { name, email } = author;

  const dateUTC = new Date(Date.now()).toUTCString();

  const [createdAuthor] = await connection.execute(
    'INSERT INTO tb_authors(name, email, created_at) VALUES (?, ?, ?)',
    [name, email, dateUTC]
  );

  return { insertId: createdAuthor.insertId };
};

const deleteAuthor = async (id) => {
  const [removedAuthor] = await connection.execute(
    'DELETE FROM tb_authors WHERE id = ?',
    [id]
  );

  return removedAuthor;
};

const updateAuthor = async (id, author) => {
  const { name, email } = author;

  const [updatedAuthor] = await connection.execute(
    'UPDATE tb_authors SET name = ?, email = ? WHERE id = ?',
    [name, email, id]
  );

  return updatedAuthor;
};

module.exports = {
  getAll,
  createAuthor,
  deleteAuthor,
  updateAuthor
};