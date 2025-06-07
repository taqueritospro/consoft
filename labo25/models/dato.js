const pool = require('../database');

module.exports = class Dato {
  constructor(valor) {
    this.valor = valor;
  }

  async save() {
    let conn;
    try {
      conn = await pool.getConnection();
      await conn.beginTransaction();

      await conn.query('INSERT INTO datos (valor) VALUES (?)', [this.valor]);

      await conn.commit();
    } catch (err) {
      if (conn) await conn.rollback();
      throw err;
    } finally {
      if (conn) conn.release();
    }
  }

  static async fetchAll() {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query('SELECT * FROM datos');
      return rows;
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release();
    }
  }
};