const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log(`Petición a ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send("Bienvenido al servidor principal");
});

app.get('/info', (req, res) => {
    res.send("Esta es la ruta /info");
});

const rutasFormulario = require('./routes/formulario.routes');
const rutasExtra = require('./routes/extra.routes');
app.use('/formulario', rutasFormulario);
app.use('/extra', rutasExtra);

app.use((req, res) => {
    res.status(404).send("Página no encontrada (404)");
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});