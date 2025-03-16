const Socio = require("../models/socios.model");
const bcrypt = require('bcryptjs');

exports.get_home = (request, response, next) => {
    response.render('home');
}

exports.get_iniciar_sesion = (request, response, next) => {
    response.render('iniciar_sesion', {
        csrfToken: request.csrfToken()
    });
}

exports.post_iniciar_sesion = (request, response, next) => {
    console.log(request.body);
    Socio.fetchOne(request.body.correo)
    .then(([rows, fieldData]) => {
        if(rows.length > 0){
            console.log(request.body.contraseña);
            console.log(rows[0].contrasenia);
            bcrypt.compare(request.body.contraseña, rows[0].contrasenia)
            .then((iguales) => {
                if(iguales){
                    request.session.correo = rows[0].correo;
                    request.session.sesionIniciada = true;
                    return request.session.save(err => {
                        response.redirect('/jugadores');
                    });
                }
                else{
                    response.redirect('/iniciar_sesion');
                }
            }).catch((error) => {
                console.log(error);
            });
        }
        else{
            response.redirect('/iniciar_sesion');
        }
    }).catch((error) => {
        console.log(error);
    });
}