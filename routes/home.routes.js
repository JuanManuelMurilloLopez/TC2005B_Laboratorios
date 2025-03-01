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
            <br>
            <form action="/about" method="GET">
                <button class="cell button is-link is-outlined">¿Quienes somos?</button>
            </form>
            <form action="/jugadores" method="GET">
                <button class="cell button is-danger is-outlined">Jugadores</button>
            </form>
            <form action="/socios/suscribirse" method="GET">
                <button class="cell button is-primary is-dark">Se un socio</button>
            </form>
            <br>
        </div>
    </nav>
`;

const htmlAbout = `
<p>
    El Futbol Club Barcelona, conocido comúnmente como Barça, es un club de fútbol profesional con sede en Barcelona, España. <br>
    Fundado en 1899 por un grupo de futbolistas suizos, catalanes, alemanes y ingleses, el club ha crecido hasta convertirse en uno de los más exitosos y populares del mundo. <br>
    El Barça es famoso por su estilo de juego basado en la posesión del balón y el ataque fluido, conocido como "tiki-taka". <br>
    A lo largo de su historia, ha ganado numerosos títulos de la liga española, la Copa del Rey y competiciones internacionales como la Liga de Campeones de la UEFA. <br>
    Además del fútbol, el club también tiene secciones en deportes como baloncesto, balonmano y hockey sobre patines, entre otros. <br>
    El Camp Nou, su estadio, es uno de los más grandes de Europa y un icono en el mundo del fútbol. <br>
    La frase "Més que un club" (Más que un club) refleja el compromiso del Barça con la cultura y la identidad catalana. <br>
    El Barcelona ha sido hogar de algunas de las mejores estrellas del fútbol mundial, como Lionel Messi, Xavi Hernández, y Andrés Iniesta. <br>
    El club continúa siendo una de las instituciones deportivas más influyentes del planeta.
</p>
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
    response.send(htmlHeader + htmlNav + htmlAbout + htmlFooter);
})

module.exports = router;

