class Animal {
    constructor(nombre){
        this.velocidad = 0;
        this.nombre = nombre;
    }

    corre(velocidad) {
        this.velocidad = velocidad;
        if(velocidad >= 10)
            console.log(`${this.nombre} es rapido, su velocidad es de ${velocidad} km/h.`);
        else 
            console.log(`${this.nombre} es lento, su velocidad es de ${velocidad} km/h.`);
    }

    temperamento(agresivo) {
        this.agresivo = agresivo;
        if(agresivo) {
            //console.log(`${this.nombre} tiene un temperamento sanguineo.`);
            return `${this.nombre} tiene un temperamento sanguineo.`;
        } else 
            //console.log(`${this.nombre} tiene un temperamento tranquilo.`);
            return `${this.nombre} tiene un temperamento tranquilo.`;
    }
}

const RAZA = "San Bernardo";

export { Animal, RAZA };