const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: '{inserta tu user}',
  password: '{inserta tu pass}',
  database: 'labo25',
  connectionLimit: 5
});

module.exports = pool;