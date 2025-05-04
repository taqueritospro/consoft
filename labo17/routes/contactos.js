const express = require('express');
const router = express.Router();
const controller = require('../controllers/contactos');

router.get('/', controller.getContactos);
router.get('/agregar', controller.getAgregar);
router.post('/agregar', controller.postAgregar);
router.get('/editar/:contacto_id', controller.getEditar);
router.post('/editar', controller.postEditar);
router.post('/eliminar', controller.postEliminar);

module.exports = router;