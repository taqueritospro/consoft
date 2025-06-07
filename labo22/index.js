const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('archivo'));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const formularioRoutes = require('./routes/formulario.routes');
app.use(formularioRoutes);

app.get('/', (req, res) => {
    res.render('index', { titulo: 'Inicio' });
});

app.use((req, res) => {
    res.status(404).render('error404', { titulo: 'Página no encontrada' });
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});