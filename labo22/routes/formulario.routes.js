const express = require('express');
const router = express.Router();

router.get('/archivo', (req, res) => {
    res.render('archivo');
});

router.post('/archivo', (req, res) => {
    if (!req.file) {
        return res.send('No se subió ningún archivo o el formato no es válido.');
    }

    const ruta_archivo = req.file.path;
    console.log('Archivo subido en:', ruta_archivo);

    res.send('Archivo subido correctamente: ' + ruta_archivo);
});

module.exports = router;