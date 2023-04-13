const connection = require('./connection');

const fetchAll = async () => {
  const { rows } = await connection.query('SELECT * FROM tb_authors ORDER BY id');

  return rows;
};

module.exports = {
  fetchAll
};