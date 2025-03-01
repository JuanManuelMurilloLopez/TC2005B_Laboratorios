const http = require("http");

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
            <br>
            <button class="cell button is-link is-outlined">¿Quienes somos?</button>
            <button class="cell button is-danger is-outlined">Jugadores</button>
            <br>
        </div>
    </nav>
`;

const htmlSocioForm = `
    <div>
        <h2>Se un socio</h2>
        <form action="/" method="POST">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre"> <br>
            <label for="apellidos">Apellidos</label>
            <input type="text" name="apellidos" id="apellidos"> <br>
            <label for="correo">Correo</label>
            <input type="email" name="correo" id="correo"> <br>
            <label for="fechaNacimiento">Fecha de nacimiento</label>
            <input type="date" name="fechaNacimiento" id="fechaNacimiento"> <br>
            <input type="submit" name="suscribirse" id="suscribirse" value="Suscribirse"> <br>
        </form>
    </div>
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

const server = http.createServer((request, response) =>{
    if(request.url == "/" && request.method == "GET"){
    response.setHeader('Content-Type', 'text/html');
    response.write(htmlHeader);
    response.write(htmlNav);
    response.write(htmlSocioForm);
    response.write(htmlFooter);
    response.end();
    }
    else if(request.url == "/" && request.method == "POST"){

        const datos = [];

        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        request.on('end', () => {
            const datosCompletos = Buffer.concat(datos).toString();
            console.log(datosCompletos);
            const campos = new URLSearchParams(datosCompletos);
            const objetoSocio = Object.fromEntries(campos.entries());
            console.log(objetoSocio);
            socios.push(objetoSocio);
            response.setHeader('Content-Type', 'text/html');
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

    }
    else if(request.url == "/about"){
        response.setHeader('Content-Type', 'text/html');
        response.write(htmlHeader);
        response.write(htmlNav);
        response.write(htmlAbout);
        response.write(htmlFooter);
        response.end();
    }
    else if(request.url == "/jugadores"){
        response.setHeader('Content-Type', 'text/html');
        response.write(htmlHeader);
        response.write(htmlNav);
        response.write(htmlJugadores);
        response.write(htmlFooter);
        response.end();
    }
    else{
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write(htmlHeader + "<div class='title is-1'>404 \n Esta página no existe</div>" + htmlFooter);
    }
    
});

server.listen(3000);
