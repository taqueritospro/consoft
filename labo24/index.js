const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const formRoutes = require('./routes/formulario.routes');
app.use(formRoutes);

app.use((req, res) => {
    res.status(404).render('error404', { titulo: 'Página no encontrada' });
});

app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});