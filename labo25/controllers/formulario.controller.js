const Dato = require('../models/dato');

exports.getInicio = async (req, res) => {
  try {
    const datos = await Dato.fetchAll();
    res.render('index', { titulo: 'Lista de Datos', datos });
  } catch (err) {
    res.status(500).send('Error al obtener datos');
  }
};

exports.getAddForm = (req, res) => {
  res.render('form', { titulo: 'Agregar Dato' });
};

exports.postAddForm = async (req, res) => {
  try {
    const nuevoDato = new Dato(req.body.valor);
    await nuevoDato.save();
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error al guardar el dato');
  }
};
