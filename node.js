const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
let texto = "";

app.get('/subir', function(req, res) {
  var {str} = req.query;
  texto += " "+str; 
  console.log(" "+texto);
});

app.get('/bajar', function(req, res) {
  res.send(texto);
});

app.listen(port, function() {
    console.log('App en el puerto http://localhost:' + port);
});

