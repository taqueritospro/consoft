const express = require('express');
const router = express.Router();
const formController = require('../controllers/formulario.controller');

router.get('/', formController.getInicio);
router.get('/add', formController.getAddForm);
router.post('/add', formController.postAddForm);
router.post('/ajax/add', formController.postAjaxDato);

module.exports = router;