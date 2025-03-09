const fileSystem = require('fs');

const Socio = require('../models/socios.model');

exports.get_suscribirse = (request, response, next) => {
    response.render('nuevo_socio');
};

exports.post_suscribirse = (request, response, next) => {
    console.log(request.body);
    const socio = new Socio(request.body);
    socio.save()
    .then( () => {
        console.log(`Personaje ${socio.nombre} guardado`);
    } )
    .catch( (error) => {
        console.log(error);
    } );
    Socio.fetch(request.params.id)
    .then( ([rows, fieldData]) => {
        response.render('lista_socios', {
            socios: rows
        });
    } )
    .catch( (error) => {
        console.log(error);
    } );
    esponse.setHeader('Set-Cookie', `ultimo_socio=${socio.nombre}`);
    console.log(Socio.fetchAll());
    sociosJson = JSON.stringify(socio, null, 2);
    fileSystem.writeFile('socios.txt', sociosJson, (err) => {
        if (err) {
            console.log('Error al guardar el archivo:', err);
            response.status(500).send('Error al guardar el archivo.');
            return;
        }
        console.log('Archivo guardado correctamente');
        console.log(request.get('Cookie'));
    });
};

exports.get_lista = (request, response, next) => {
    Personaje.fetch(request.params.id)
    .then( ([rows, fieldData]) => {
        response.render('lista_socios', {
            socios: rows
        });
    } )
    .catch( (error) => {
        console.log(error);
    } );
}

