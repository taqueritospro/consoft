const Contacto = require('../models/Contacto');

exports.getContactos = (req, res) => {
    Contacto.fetchAll().then(contactos => {
        res.render('list', { contactos });
    }).catch(err => console.log(err));
};

exports.getAgregar = (req, res) => {
    res.render('add');
};

exports.postAgregar = (req, res) => {
    const contacto = new Contacto(req.body.nombre, req.body.telefono, req.body.email);
    contacto.save().then(() => res.redirect('/')).catch(err => console.log(err));
};

exports.getEditar = (req, res) => {
    const id = req.params.contacto_id;
    Contacto.findById(id).then(contacto => {
        res.render('edit', { contacto });
    }).catch(err => console.log(err));
};

exports.postEditar = (req, res) => {
    const { id, nombre, telefono, email } = req.body;
    Contacto.updateById(id, nombre, telefono, email)
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));
};

exports.postEliminar = (req, res) => {
    const id = req.body.id;
    Contacto.deleteById(id)
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));
};