const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Bienvenido a mi aplicación web</h1><p>Visita /formulario para dejar tus datos.</p>');
    
    } else if (url === '/formulario' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
        <h1>Formulario de contacto</h1>
        <form method="POST" action="/gracias">
            Nombre: <input type="text" name="nombre"><br>
            Mensaje: <textarea name="mensaje"></textarea><br>
            <button type="submit">Enviar</button>
        </form>
        `);

    } else if (url === '/gracias' && method === 'POST') {
        let cuerpo = '';

        req.on('data', chunk => {
        cuerpo += chunk.toString();
        });

        req.on('end', () => {
        fs.appendFile('datos.txt', cuerpo + '\n', err => {
            if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            return res.end('Error al guardar los datos');
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Gracias por tu mensaje :)</h1><p>Volver a <a href="/">inicio</a></p>');
        });
        });

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});