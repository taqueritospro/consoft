const Dato = require('../models/dato');

exports.getInicio = (req, res) => {
    const datos = Dato.fetchAll();
    res.render('index', { titulo: 'Lista de Datos', datos: datos });
};

exports.getAddForm = (req, res) => {
    res.render('form', { titulo: 'Agregar Dato' });
};

exports.postAddForm = (req, res) => {
    const nuevoDato = new Dato(req.body.valor);
    nuevoDato.save();
    res.redirect('/');
};