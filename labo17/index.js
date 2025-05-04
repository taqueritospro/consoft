const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const contactoRoutes = require('./routes/contactos');
app.use(contactoRoutes);

app.use((req, res) => {
    res.status(404).render('404', { mensaje: 'Página no encontrada' });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});