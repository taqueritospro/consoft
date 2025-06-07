npm init -y
npm install express body-parser multer

**index.js**
`
const http    = require('http');
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const app     = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});

app.listen(3000);
`
**public/index.html**
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World Simple App</title>
</head>
<body>
  <div class="container">
    <h1>Multipart File Upload</h1>
    <form action="/upload_file" method="POST" enctype="multipart/form-data" id="form">
      <div class="input-group">
        <label for="files">Select files</label>
        <input id="file" name="file" type="file" />
      </div>
      <button class="submit-btn" type="submit">Upload</button>
    </form>
  </div>
</body>
</html>`
**index.controller.js**
`
const log = console.log;  

module.exports.upload_file = async (req,res) =>{

    log("Cargando el archivo");

    res.status(200).json({code:200,msg:"Ok"});

}
`
Agregar en index.js
`
const controller = require("./index.controller");
app.post("/upload_file", controller.upload_file);
`
