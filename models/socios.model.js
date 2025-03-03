const socios = [];

module.exports = class Socio {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(obj) {
        this.nombre = obj.nombre;
        this.apellidos = obj.apellidos;
        this.correo = obj.correo;
        this.fechaNacimiento = obj.fechaNacimiento;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        socios.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return socios;
    }

}