export class Mascota {
    constructor(nombre) {
        this.nombre = nombre;
    }
    obtenerNombre() {
        return this.nombre;
    }
    static obtenerPeso() {
        return 30;
    }
    obtenerRaza() {
        return "San Bernardo";
    }
}
