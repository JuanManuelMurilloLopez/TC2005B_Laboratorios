const express = require('express');
const router = express.Router();

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

const htmlJugadores = `
    <div>
        <h3 class="title is-3">Porteros</h3>
        <ul>
            <li>Marc-André Ter Stegen</li>
            <li>Iñaki Peña</li>
            <li>Wojciech Szczesny</li>
        </ul>
        <h3 class="title is-3">Defensas</h3>
        <ul>
            <li>Pau Cubarsí</li>
            <li>Alejandro Balde</li>
            <li>Ronald Araujo</li>
            <li>Iñigo Martinez</li>
            <li>Andreas Christensen</li>
            <li>Jules Kounde</li>
            <li>Eric Garcia</li>
        </ul>
        <h3 class="title is-3">Centrocampistas</h3>
        <ul>
            <li>Gavi</li>
            <li>Pedri</li>
            <li>Pablo Torre</li>
            <li>Fermín López</li>
            <li>Marc Casadó</li>
            <li>Dani Olmo</li>
            <li>Frenkie De Jong</li>
        </ul>
        <h3 class="title is-3">Delanteros</h3>
        <ul>
            <li>Ferran Torres</li>
            <li>Robert Lewandowski</li>
            <li>Ansu Fati</li>
            <li>Raphiña</li>
            <li>Pau Víctor</li>
            <li>Lamine Yamal</li>
        </ul>
        <h3 class="title is-3">Entrenador</h3>
        Hansi Flick
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

router.get('/', (request, response, next) => {
    response.send(htmlHeader + htmlNav + htmlJugadores + htmlFooter);
})

module.exports = router;

