const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

router.get('/form_method', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    const html = fs.readFileSync(path.resolve(__dirname, './../form.html'), 'utf8');
    res.write(html);
    res.end();
});

router.post('/form_method', (req, res) => {
    const indice = Number(req.body.indice);
    const imprimir = req.body.imprimir;

    const contenido = `Índice: ${indice}, Imprimir: ${imprimir}\n`;
    fs.appendFileSync(path.resolve('./', 'data.txt'), contenido);

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ code: 200, msg: "Datos guardados correctamente" });
});

module.exports = router;