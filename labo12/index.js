const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const formularioRoutes = require('./routes/formulario.routes');
const extraRoutes = require('./routes/extra.routes');

app.use('/formulario', formularioRoutes);
app.use('/extra', extraRoutes);

app.get('/', (req, res) => {
    res.render('index', { titulo: 'Inicio' });
});

app.use((req, res) => {
    res.status(404).render('error404', { titulo: 'Página no encontrada' });
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});