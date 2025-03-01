const express = require('express');
const router = express.Router();

const fileSystem = require('fs');

const socios = [];

const htmlHeader = `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FCB</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
</head>
<body style="max-width: 50em; margin: 0 auto; font-family: Arial, Helvetica, sans-serif;">
    <header class="has-text-centered">
        <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png" alt="" width="100">
        <h1 class="title is-1">Fútbol CLub Barcelona</h1> <br>
    </header>
    `;

const htmlNav = `
    <nav>
        <div class="grid">
            <form action="/" method="GET">
                <button class="cell button is-link is-outlined">Regresar</button>
            </form>
        </div>
    </nav>
`;

const htmlSocioForm = `
    <div>
        <h2>Se un socio</h2>
        <form action="/socios/suscribirse" method="POST">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre"> <br>
            <label for="apellidos">Apellidos</label>
            <input type="text" name="apellidos" id="apellidos"> <br>
            <label for="correo">Correo</label>
            <input type="email" name="correo" id="correo"> <br>
            <label for="fechaNacimiento">Fecha de nacimiento</label>
            <input type="date" name="fechaNacimiento" id="fechaNacimiento"> <br>
            <input type="submit" name="" id="suscribirse" value="Suscribirse"> <br>
        </form>
    </div>
`;

const htmlFooter = `
    <footer class="has-text-centered">
        <p>Sigue las redes del Barça</p>
        <div class="grid">
            <a class="cell box" href="https://www.facebook.com/fcbarcelona/">Facebook</a>
            <a class="cell box" href="https://x.com/fcbarcelona_es">X</a>
            <a class="cell box" href="https://www.youtube.com/user/fcbarcelona">Youtube</a>
            <a class="cell box" href="https://www.instagram.com/fcbarcelona/">Instagram</a>
        </div>
        <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png" alt="" width="50">
        <p>FC BARCELONA</p>
    </footer>
</body>
</html>
`;

router.get('/suscribirse', (request, response, next) => {
    response.send(htmlHeader + htmlNav + htmlSocioForm + htmlFooter);
});

router.post('/suscribirse', (request, response, next) => {
    console.log(request.body);
    socios.push(request.body);
    sociosJson = JSON.stringify(socios, null, 2);
    fileSystem.writeFile('socios.txt', sociosJson, (err) => {
        if (err) {
            console.log('Error al guardar el archivo:', err);
            response.status(500).send('Error al guardar el archivo.');
            return;
        }
        console.log('Archivo guardado correctamente');
    });
    response.write(htmlHeader);
    response.write(htmlNav);
    response.write('<div class="columns">');
    for(let i = 0; i < socios.length; i++){
        response.write('<div class="column box">');
        response.write('<h3>Socio #' + socios.length + '</h3> <br>');
        response.write('<h4>Nombre: ' + socios[i].nombre + '</h4> <br>');
        response.write('<h4>Apellidos: ' + socios[i].apellidos + '</h4> <br>');
        response.write('<h4>Correo: ' + socios[i].correo + '</h4> <br>');
        response.write('<h4>Fecha de nacimiento: ' + socios[i].fechaNacimiento + '</h4> <br>');
        response.write('</div>');
    }
    response.write('</div>');
    response.write(htmlFooter);
    response.end();
});

module.exports = router;

