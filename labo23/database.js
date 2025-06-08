const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: '{ingresa tu user}',
  password: '{ingresa tu pass}',
  database: 'labo25',
  connectionLimit: 5
});

module.exports = pool;

// Correr "sql/db_create.sql" para la base de datos