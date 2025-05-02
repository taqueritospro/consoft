// routes/extra.routes.js
const express = require('express');
const router = express.Router();

router.get('/saludo', (req, res) => {
    res.send('¡Hola desde /extra/saludo!');
});

router.get('/hora', (req, res) => {
    const ahora = new Date().toLocaleTimeString();
    res.send(`La hora actual es: ${ahora}`);
});

router.get('/fecha', (req, res) => {
    const fecha = new Date().toLocaleDateString();
    res.send(`La fecha de hoy es: ${fecha}`);
});

module.exports = router;