const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  port: process.env.PG_PORT
});

const connection = () => {
  try {
    client.connect();

    console.log('The DB connection is success!');
  } catch {
    console.log('Erro ao conectar ao DATABASE');
  }
};

connection();

module.exports = client;