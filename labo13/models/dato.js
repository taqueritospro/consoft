const datos = [];

module.exports = class Dato {
    constructor(valor) {
      this.valor = valor;
    }

    save() {
      datos.push(this);
    }

    static fetchAll() {
      return datos;
    }
};