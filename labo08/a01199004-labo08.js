const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    fs.readFile(path.join('../labo05/', 'a01199004-labo05.html'), (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end("Error al cargar la página");
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});