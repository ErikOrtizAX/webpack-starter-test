export class Mascota {
    private nombre: string;
    constructor(nombre: string){
        this.nombre = nombre;
    }

    public obtenerNombre(): string {
        return this.nombre;
    }

    static obtenerPeso(): number {
        return 30;
    }

    public obtenerRaza(): string {
        return "San Bernardo";
    }
}