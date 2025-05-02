const express = require('express');
const router = express.Router();

router.get('/form', (req, res) => {
    res.render('form', { titulo: 'Formulario' });
});

router.post('/form', (req, res) => {
    const indice = Number(req.body.indice);
    const imprimir = req.body.imprimir;
    const resultado = Array(indice).fill(imprimir);
    res.render('resultado', {
        titulo: 'Resultado',
        resultado
    });
});

module.exports = router;