const express = require('express');
const router = express.Router();

const fileSystem = require('fs');

const socios = [];

router.get('/suscribirse', (request, response, next) => {
    response.render('nuevo_socio');
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
    response.render('lista_socios', {
        socios: socios,
    });
});

module.exports = router;

