const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '0nly4dm1ns',
    database: 'agenda_contactos',
    connectionLimit: 5
});

module.exports = pool;