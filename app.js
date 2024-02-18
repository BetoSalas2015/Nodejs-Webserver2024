const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 8080;

//  Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

//  Controlador
app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Roberto Salazar',
    titulo: 'curso de node'
  });
});

app.get('/elements', function (req, res) {
  res.render('elements.hbs', {
    nombre: 'Roberto Salazar',
    titulo: 'curso de node'
  });
});

app.get('/generic', function (req, res) {
  res.render('generic.hbs', {
    nombre: 'Roberto Salazar',
    titulo: 'curso de node'
  });
});

app.get('/elements.html', function (req, res) {
  res.render('elements.hbs', {
    nombre: 'Roberto Salazar',
    titulo: 'curso de node'
  });
});

app.listen(port,  () => {   
    console.log(`Aplicación de ejemplo: Escuchando el puerto http://localhost:${port}`);
});