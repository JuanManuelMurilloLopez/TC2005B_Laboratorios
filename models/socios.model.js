const socios = [];

const db = require('../util/database');

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
        return db.execute('INSERT INTO Socios(nombre, apellidos, correo, fechaNacimiento)  VALUES(?, ?, ?, ?)', [this.nombre, this.apellidos, this.correo,  this.fechaNacimiento])
        
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM Socios');
    }

    static fetchOne(nombre){
        return db.execute('SELECT * FROM Socios WHERE nombre=?', [nombre]);
    }

    static fetch(nombre){
        if(nombre){
            return this.fetchOne(nombre);
        }
        else{
            return this.fetchAll();
        }
    }

}