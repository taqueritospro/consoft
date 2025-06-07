const express = require('express');
const router = express.Router();

router.get('/saludo', (req, res) => {
    res.send('¡Hola desde /extra/saludo!');
});

router.get('/json', (req, res) => {
    res.json({ mensaje: 'Respuesta JSON desde /extra/json' });
});

router.get('/html', (req, res) => {
    res.send('<h1>HTML generado desde ruta extra</h1>');
});

module.exports = router;