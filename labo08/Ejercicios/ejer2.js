const fs = require('fs');

function escribirTexto(archivo, contenido) {
    fs.writeFile(archivo, contenido, (err) => {
        if (err) throw err;
        console.log("Archivo guardado correctamente.");
    });
}

escribirTexto("salida.txt", "Hola desde Node.js!");