const http = require("http");
const fileSystem = require("fs");

const arrayPrueba = [1, 6, 43, 95, 37, 2, 4, 6];
const stringPrueba = "Hola mundo";

function average(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum+= array[i];
    }
    return sum/array.length;
}

function writeToFile(string){
    fileSystem.writeFileSync("string.txt", stringPrueba + "\n");
    console.log("Archivo escrito");
}

function bubbleSort(array){
    let temp;
    let swapped;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
            
        }
        if(swapped == false){
            break;
        }
    }
}

console.log("Array: ", arrayPrueba);
console.log("Promedio: ", average(arrayPrueba));
writeToFile(stringPrueba);
console.log("Array desordenado: " + arrayPrueba);
bubbleSort(arrayPrueba)
console.log("Array ordenado: " + arrayPrueba);

html =  `
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coldplay</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
</head>
<body style="max-width: 50em; margin: 0 auto; font-family: Arial, Helvetica, sans-serif;">
    
    <header> 
        <h1 id="titulo_principal" class="title is-1 content has-text-centered">COLDPLAY</h1>
    </header>

    <nav class="navbar" style="justify-content: center; padding: 2em;">
        <button class="button is-link is-small is-outlined" onclick="window.location.href='#author_container';">Sobre el artista</button>
        <button class="button is-link is-small is-outlined" onclick="window.location.href='#albums_container';">Discografía</button>
        <button class="button is-link is-small is-outlined" onclick="window.location.href='#concerts_container';">Próximos conciertos</button>
        <button class="button is-link is-small is-outlined" onclick="window.location.href='#preguntas_container'">Preguntas</button>
    </nav>

    <h2 class="subtitle is-3">¿Quiénes son Coldplay?</h2>
    <div class="box" id="author_container">
        <div class="author">
            Coldplay es una banda británica de rock formada en Londes en 1997. 
            Está integrada por Chris Martin (vocalista principal y pianista), Jonny Buckland (guitarrista), Guy Berryman (bajista), Will Champion (baterista y vocalista secundario)
            y Phil harvey (director creativo).
            Se conocieron en el University College London y comenzaron a tocar música juntos desde 1997 hasta 1998, inicalmente llamándose a sí mismos Big Fat Noises y luego Starfish. <br> <br>
            Después de lanzar de forma independiente un EP, Safety (1998), Coldplay firmó con Parlophone en 1999. 
            El álbum debut de la banda, Parachutes (2000), incluyó su exitoso sencillo "Yellow" y recibió un Brit Award por Álbum Británico del Año, 
            un Premio Grammy al Mejor Álbum de Música Alternativa, y nominación al Premio Mercury.
            Su segundo álbum, A Rush of Blood to th Head (2002), ganó un premio Grammy por Grabación del año.
            Destacado por una producción problemática, el tercer álbum de la banda, X&Y (2005), fue el más vendido del año en todo el mundo, un logro repetido por su sucesor, 
            Viva la Vida or Death and All His Friends (2008), que los vio explorar nuevos estilos musicales.
            Recibió un Premio Grammy al Mejor Álbum de Rock y su primera nominación al Album del Año, mientras que la canción principal se convirtió en el primer sencillo 
            de un grupo británico en alcanzar el número uno tanto en Reino Unido como en Estados Unidos en el siglo XXI. <br> <br>
            Desde entonces, Coldlay diversificó aún más su sonido con los lanzamientos posteriores Mylo Xyloto (2011), Gosth Stories (2014), A Head Full of Dreams (2015), 
            Everyday Life (2019), Music of the Spheres (2021).
            Cada álbum representaba un tema único y añadía nuevos estilos musicales al repertorio original de la banda, incluyendo electrónica, ambient pop, R&B, funk, clásica, 
            jazz fusión y rock progresivo.
            También son conocidos por sus presentaciones en vivo eufóricas, que NME dijo que es cuando la banda cobra vida y tiene más sentido. 
            Para celebrar su vigésimo aniversario en 2018, se estrenó en cines el documental que abarca toda la carrera dirigido por Mat Whitecross, que presenta imágenes detrás de 
            escenas nunca antes vistas. <br> <br>
            Con más de 100 millones de álbumes vendidos en todo el mundo, Coldplay es la banda más exitosa del siglo XXI y uno de los actos musicales más vendidos de todos los tiempos. 
            Según Fuse, también es el sexto grupo más premiado de la historia. Otros logros notables incluyen la sexta gira más taquillera de todos los tiempos, 
            tres de los 50 álbumes más vendidos en el Reino Unido, la mayor cantidad de discos númerouno del país sin perder nunca la cima, la mayoría de las nominaciones 
            y victorias para una banda en la historia de los Brit Awards y convertirse en el primer grupo británico en debutar en el número uno en el Billboard Hot 100. 
            Coldplay también se considera una de las bandas más influyentes del siglo XXI, y Forbes los describe como el estándar para la escena alternativa actual. 
            El Salón de la Fama del Rock and Roll incluyó A Rush of Blood to the Head en su lista de 200 Álbumes Definitivos y el sencillo Yellos forma parte de su exhibición 
            Songs That Shaped Rock and Roll por ser uno de los más exitosos y grabaciones más importantes en la industria. 
            A pesar de su popularidad e impacto, Coldplay se ha ganado la reputación de ser íconoes musicales polarizantes.
        </div>
        <div id="group_photo"><img src="https://ca-times.brightspotcdn.com/dims4/default/9ded875/2147483647/strip/true/crop/1198x828+0+0/resize/1200x829!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F3e%2F44%2F681a010b470d876bea790018a89b%2Fcoldplay-credit-james-marcus-haney-1.jpeg" alt="" width="500"></div>
    </div>
    <h2 class="subtitle is-3">Álbumes</h2>
    <div class="box" id="albums_container">
        <div class="grid">
            <div class="cell box">
                <img src="https://m.media-amazon.com/images/I/61XGRcPbr4L._UF1000,1000_QL80_.jpg" alt="" width="200" style="border-radius: 6px;"> <br> <br>
                <a href="https://open.spotify.com/album/6ZG5lRT77aJ3btmArcykra?si=1TYQeLz4QOm7qRYn6txQ6Q" target="_blank">Parachutes (2000)</a>
            </div>
            <div class="cell box">
                <img src="https://upload.wikimedia.org/wikipedia/en/6/60/Coldplay_-_A_Rush_of_Blood_to_the_Head_Cover.png" alt="" width="200" style="border-radius: 6px;"> <br> <br>
                <a href="https://open.spotify.com/album/0RHX9XECH8IVI3LNgWDpmQ?si=f0Mej5TeSCmH4N3BuyTvfA" target="_blank">A Rush of Blood to the Head <br>(2002)</a>
            </div>
            <div class="cell box">
                <img src="https://m.media-amazon.com/images/I/31m79Ms1IRL._UF1000,1000_QL80_.jpg" alt="" width="200" style="border-radius: 6px;"> <br> <br>
                <a href="https://open.spotify.com/album/4E7bV0pzG0LciBSWTszra6?si=K2gC8aIpTBWgw8JWDl_2NA" target="_blank">X&Y (2005)</a>
            </div>
            <div class="cell box">
                <img src="https://m.media-amazon.com/images/I/9145yafeO2L._UF1000,1000_QL80_.jpg" alt="" width="200" style="border-radius: 6px;"> <br> <br>
                <a href="https://open.spotify.com/album/1CEODgTmTwLyabvwd7HBty?si=Q6ADIiksQ_eqOjtnkKmx2A" target="_blank">Viva La Vida or Death <br> All His Friends (2008)</a>
            </div>
            <div class="cell box">
                <img src="https://m.media-amazon.com/images/I/51Cuv85tEUL._UF1000,1000_QL80_.jpg" alt="" width="200" style="border-radius: 6px;"> <br> <br>
                <a href="https://open.spotify.com/album/2R7iJz5uaHjLEVnMkloO18?si=tR4oU3tVTPePxrrbiBIVSg" target="_blank">Mylo Xyloto (2011)</a>
            </div>
            <div class="cell box">
                <img src="https://upload.wikimedia.org/wikipedia/en/8/8a/Coldplay_-_Ghost_Stories.png" alt="" width="200" style="border-radius: 6px;"> <br> <br>
                <a href="https://open.spotify.com/album/2G4AUqfwxcV1UdQjm2ouYr?si=r1dDIefNTNSMpBHGKh1m2g" target="_blank">Ghost Stories (2014)</a>
            </div>
            <div class="cell box">
                <img src="https://m.media-amazon.com/images/I/A1p7bWyAvmL._UF1000,1000_QL80_.jpg" alt="" width="200" style="border-radius: 6px;"> <br> <br>
                <a href="https://open.spotify.com/album/3cfAM8b8KqJRoIzt3zLKqw?si=ktG7mH36RN64d7zOUosAzw" target="_blank">A Head Full of Dreams (2015)</a>
            </div>
            <div class="cell box">
                <img src="https://upload.wikimedia.org/wikipedia/en/8/8e/Coldplay_-_Everyday_Life.png" alt="" width="200" style="border-radius: 6px;"> <br> <br>
                <a href="https://open.spotify.com/album/2FeyIYDDAQqcOJKOKhvHdr?si=XCFcHrytS0CwYuwNcnsnoA" target="_blank">Everyday Life (2019)</a>
            </div>
            <div class="cell box">
                <img src="https://i.scdn.co/image/ab67616d0000b273ec10f247b100da1ce0d80b6d" alt="" width="200" style="border-radius: 6px;"> <br> <br>
                <a href="https://open.spotify.com/album/06mXfvDsRZNfnsGZvX2zpb?si=XRzWTMQ3REW4BvQc84LiWA" target="_blank">Music Of the Spheres (2021)</a>
            </div>
        </div>
    </div>
    <h2 class="subtitle is-3">Gira</h2>
    <div class="box" id="concerts_container">
        <div class="concerts">
            <ol>
                <li>Oct 30 Melbrourne, VIC, Australia</li>
                <li>Nov 6 Sydney Olympic Park, NSW, Australia</li>
                <li>Nov 13 Auckland, New Zealand</li>
                <li>Jan 11 Abu Dhabi, United Arab Emirates</li>
                <li>Apr 9 Hong Kong, China</li>
                <li>Feb 30 Foro Sol, CDMX, México</li>
                <li>Aug 22 Wembley Stadium, London, UK</li>
            </ol>
            <h3>Conciertos cerca de ti</h3>
            <h4>Feb 30 Foro Sol, CDMX, México</h4>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10691.623225224368!2d-99.09897932918197!3d19.40501734974959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fc241cd2cc61%3A0xd994597d3d690170!2sEstadio%20GNP%20Seguros!5e0!3m2!1ses-419!2smx!4v1727719333046!5m2!1ses-419!2smx" width="600" height="450" style="border-radius: 10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
    <h2 class="subtitle is-3">Preguntas</h2>
    <div class="box" id="preguntas_container">
        <h3><strong>Describe Material Design</strong></h3>
        <p>
            Material Design es un sistema de diseño creado por Google que incluye tanto guías para la experiencia de usuario como implementaciones de interfaces de usuario. <br>
            Proporciona plantillas de componentes los cuales puedes adaptar a tus necesidades con distintos diseños para mejorar la UX.
            Se constituye de 3 partes:
            <li>Bases: Estándares y patrones de diseño e interacción</li>
            <li>Estilos: Aspectos visuales del User Interface</li>
            <li>Componentes: BLoques de construcción interactiva para la creación de User Interfaces</li>
        </p>
    </div>
    <footer class="footer content has-text-centered">
        <h3>Juan Manuel Murillo López</h3>
        <h4>m +52 442 156 9563</h4>
        <h4>Correo: a01712218@tec.mx</h4>
        <h5>Editor HTML: <a href="https://code.visualstudio.com/">Visual Studio Code</a></h5>
        <h5>Framework: <a href="https://bulma.io/">Bulma</a></h5>
    </footer>
    
    
</body>
</html>
`


const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(html);
    response.end();
})

server.listen(3000);