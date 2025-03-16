module.exports = (request, response, next) => {
    console.log(request.session.privilegios);
    let canSocios = false;
    for (let privilegio of request.session.privilegios) {
        if (privilegio.nombrePrivilegio == "Ver Socios") {
            console.log("next middleware Ver Socios");
            canSocios = true;
            next();
        }
    }
    if (!canSocios) {
        return response.status(403).send("No tienes permitido ver esta página");    
    }
};