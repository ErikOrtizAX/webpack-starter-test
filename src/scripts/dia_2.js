/* Function Scope */
let saludo = "Otro Hola";
function saludar() {
    let saludo = "Hola";
    console.log(saludo);
}
console.log(saludo);

saludar();

/* Block Scope */
if(true) {
    var nombre = "Issac";
    console.log("Valor de nombre en el bloque", nombre);
}
console.log("Valor de nombre fuera del bloque", nombre);

//let index = 10;
for (let index = 0; index <= 5; index++) {
    console.log("Valor de index en el bloque", index);
}
//console.log("Valor de index fuera del bloque", index);

/* IIFE Pattern */
(function() {
    console.log("Hola convencional");
})();

(() => {
    console.log("Hola arrow");
})();

/* Closures */
const contador = (function() {
    let _contandor = 0;

    function incrementar() {
        return _contandor++;
    }

    function decrementar() {
        return _contandor--;
    }

    function valor() {
        return _contandor;
    }

    return { incrementar, decrementar, valor };

})();

contador;
console.log("Valor: ", contador.valor());

contador.incrementar();
contador.incrementar();
contador.incrementar();
console.log("Valor nuevo: ", contador.valor());

contador.decrementar();

console.log("Valor nuevo: ", contador.valor());
console.log("Closure: ", contador);

/* Arrow Functions */
// function suma(a, b) {
//     return a + b;
// }

// let suma = (a, b) => {
//     return a + b;
// };

let suma = (a, b) => a + b;

// console.log("Funcion convencional: ", suma(2, 5));

console.log("Funcion arrow: ", suma(2, 5));

// Revisar
const funciones = {
    nombre: "Saludo",
    x: function() {
        console.log("F1: ", this.nombre);
    },
    y: () => {
        //console.log("F2: ", this.funciones.nombre); // window
    }
};

console.log("Func 1: ", funciones.x());
console.log("Func 2: ", funciones.y());


/* Default parameters and optionals */
// function persona(nombre, edad) {
//     nombre = typeof nombre !== 'undefined' ? nombre : "Issac";
//     edad = typeof edad !== 'undefined' ? edad : 30,
//     console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
// }

function persona(nombre = "Sin Nombre", edad = 0) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}

persona("Issac", 30);

/* Constructor Function() */
// function sum(a, b) {
//     return a + b;
// }

const sum = new Function('a', 'b', 'let resultado = a + b; return resultado;');

console.log("Sum igual a:", sum(10, 8));

/* Prototype Persona.prototype */
function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;

    // this.saludar = () => {
    //     console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
    // };
}

Persona.prototype.saludar = function() {
    console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
};

let usuario = new Persona("Javier", 30);
console.log("Persona: ", usuario);

usuario.saludar();

/* Array Iteration */

const posts = [{
    id: 1,
    titulo: "Mi primer Post",
    img: "https://picsum.photos/200",
    tags: ["javascript", "web"]
},{
    id: 2,
    titulo: "Mi segundo Post",
    img: "https://picsum.photos/200",
    tags: ["javascript", "mobile"]
},{ 
    id: 3,
    titulo: "Mi tercer Post",
    img: "https://picsum.photos/200",
    tags: ["javascript", "desktop"]
}];

// foreach
    posts.forEach(post => console.log("foreach:", post));
// filter
    posts.filter(post => console.log("filter: ", post.tags.includes("web")));
// every
    posts.every(post => console.log("every:", post.tags.includes("javascript"))); // true
    posts.every(post => console.log("every:", post.tags.includes("desktop"))); //false
// map
    let arreglo = [];
    posts.map(post => {
        arreglo.push(post.titulo);
        console.log(arreglo);
    });
// reduce
    let tags = posts.reduce((allTags, post) => {
        return Array.from(new Set([...allTags, ...post.tags ]));
    }, []);

    console.log("Tags:", tags);

// Ejercicios de: push, pop, unshift, shift, sort, reverse, splice, slice, concat, find, some, indexOf

/* Class */
import { Animal } from "./module";

let animal = new Animal("Leon");
animal.corre(100);
animal.temperamento(true);


class Perro extends Animal {
    algoDePerros(temp) {
        let flag = temp ? "ALERTA" : "OK";
        return flag;
    }

    temperamento(agresivo) {
        this.agresivo = agresivo;
        let flag;
        if(agresivo){
            flag = this.algoDePerros(agresivo);
            console.log(`${super.temperamento(agresivo)} No es recomendable tenerlo en casa - ${flag}`);
        }else {
            flag = this.algoDePerros(agresivo);
            console.log(`${super.temperamento(agresivo)}Es recomendable tenerlo en casa - ${flag}`);
        }
    }
}

let perro = new Perro("San Bernardo");
perro.corre(90);
perro.temperamento(true);

