const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


app.use((request, response, next) => {
    console.log('Middleware');
    next();
});

//Página principal
const rutaHome = require('./routes/home.routes');
app.use('/', rutaHome);

//Página información
const rutaAbout = require('./routes/about.routes');
app.use('/about', rutaAbout);

//Página lista de jugadores
const rutaJugadores = require('./routes/jugadores.routes');
app.use('/jugadores', rutaJugadores);

//Páginas de socios
const rutasSocios = require('./routes/socios.routes');
app.use('/socios', rutasSocios);

//Página oficial del Barça
app.use('/paginaOficial', (request, response) => {
    response.redirect('https://www.fcbarcelona.es/es/');
});

//Ruta no encontrada
app.use((request, response, next) => {
    response.statusCode = 404;
    response.send("<div class='title is-1'>404 \n Esta página no existe</div>");
});

app.listen(3000);