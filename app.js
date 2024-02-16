const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port,  () => {
    console.log(`Aplicación de ejemplo: Escuchando el puerto http://localhost:${port}`);
});