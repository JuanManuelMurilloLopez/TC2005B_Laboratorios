const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Socio {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(obj) {
        this.nombre = obj.nombre;
        this.apellidos = obj.apellidos;
        this.correo = obj.correo;
        this.fechaNacimiento = obj.fechaNacimiento;
        this.contraseña = obj.contraseña;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {

        return bcrypt.hash(this.contraseña, 12)
        .then( (contraseña_cifrada) => {
            return db.execute('INSERT INTO Socios(nombre, apellidos, correo, fechaNacimiento, contrasenia)  VALUES(?, ?, ?, ?, ?)', [this.nombre, this.apellidos, this.correo,  this.fechaNacimiento, contraseña_cifrada])
        }).catch(
            (error) => {
                console.log(error);
        });
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM Socios');
    }

    static fetchOne(correo){
        return db.execute('SELECT * FROM Socios WHERE correo=?', [correo]);
    }

    static fetch(correo){
        if(correo){
            return this.fetchOne(correo);
        }
        else{
            return this.fetchAll();
        }
    }

}