const connection = require('./connection');

const fetchAll = async () => {
  const { rows } = await connection.query('SELECT * FROM tb_categories ORDER BY id');

  return rows;
};

const createCategory = async (category) => {
  const { name, description } = category;

  const createdCategory = await connection.query(
    'INSERT INTO tb_categories(name, description) VALUES($1, $2)',
    [name, description]
  );

  return createdCategory;
};

module.exports = {
  fetchAll,
  createCategory
};