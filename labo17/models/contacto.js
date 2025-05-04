const db = require('../utils/database');

module.exports = class Contacto {
    constructor(nombre, telefono, email) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }

    save() {
        return db.getConnection().then(conn => {
            return conn.query(
                'INSERT INTO contactos (nombre, telefono, email) VALUES (?, ?, ?)',
                [this.nombre, this.telefono, this.email]
            ).finally(() => conn.release());
        });
    }

    static fetchAll() {
        return db.getConnection().then(conn => {
            return conn.query('SELECT * FROM contactos')
                .then(rows => {
                    conn.release();
                    return rows;
                });
        });
    }

    static findById(id) {
        return db.getConnection().then(conn => {
            return conn.query('SELECT * FROM contactos WHERE id = ?', [id])
                .then(rows => {
                    conn.release();
                    return rows[0];
                });
        });
    }

    static updateById(id, nombre, telefono, email) {
        return db.getConnection().then(conn => {
            return conn.query(
                'UPDATE contactos SET nombre = ?, telefono = ?, email = ? WHERE id = ?',
                [nombre, telefono, email, id]
            ).finally(() => conn.release());
        });
    }

    static deleteById(id) {
        return db.getConnection().then(conn => {
            return conn.query('DELETE FROM contactos WHERE id = ?', [id])
                .finally(() => conn.release());
        });
    }
};