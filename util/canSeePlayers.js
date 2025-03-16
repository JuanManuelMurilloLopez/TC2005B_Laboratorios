module.exports = (request, response, next) => {
    console.log(request.session.privilegios);
    let canJugadores = false;
    for (let privilegio of request.session.privilegios) {
        if (privilegio.nombrePrivilegio == "Ver Jugadores") {
            console.log("next middleware Ver jugadores");
            canJugadores = true;
            next();
        }
    }
    if (!canJugadores) {
        return response.status(403).send("No tienes permitido ver esta página");    
    }
};