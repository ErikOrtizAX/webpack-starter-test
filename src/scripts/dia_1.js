import '../styles/index.scss';

console.log('webpack starterkit');

// CONST
const a = 7;

console.log("el valor de a es: ", a);

const numeros = [50, 60 , 70];
//numeros = [10, 20, 30];
numeros.push(80);

console.log("Arreglo numeros", numeros);

const auto = {
    color: "Blanco",
    tipo: "SUV",
    marca: "Mazda"
};

// auto = {
//     color: "Rojo",
//     tipo: "Hatchback",
//     marca: "Audi"
// };

auto.color = "Rojo";
auto.modelo = 2022;

console.log("Auto: ", auto);

// VAR
var edad1 = 55;
var edad1 = 90;
console.log("edad es: ", edad1);

for(var i = 0; i <= 5; i++){
    console.log("Valor de i dentro del bloque: ", i);
}
console.log("Valor de i fuera del bloque: ", i);

// LET
let edad2 = 3;
console.log("edad es: ", edad2);

let j = 200;

for(let j = 0; j <= 5; j++){
    console.log("Valor de j dentro del bloque: ", j);
}
console.log("Valor de j fuera del bloque: ", j);

// Rest Parameters
function datosUsuarioOld(nombre, edad, correo){
    console.log(`Nombre ${nombre} \n Edad: ${edad} años \n Correo ${correo}`);
    //console.log("Nombre: " + nombre + "Edad: " + edad);
}

datosUsuarioOld("Issac", 30, "issac.centenoc@axity.com", "México");

function datosUsuarioRestParameters(...datosUsuario){
    console.log("datosUsuario: ", datosUsuario);
    console.log(`Rest: Nombre ${datosUsuario[0]} \n Edad: ${datosUsuario[1]} años \n Correo ${datosUsuario[2]} \n País: ${datosUsuario[3]}`);
}

datosUsuarioRestParameters("Issac", 30, "issac.centenoc@axity.com", "México");

// Spread Syntax
function datosUsuarioSpreadParameters(...datosUsuario){
    console.log(`Spread: Nombre ${datosUsuario[0]} \n Edad: ${datosUsuario[1]} años \n Correo ${datosUsuario[2]} \n País: ${datosUsuario[3]}`);
}

let arregloDatos = ["Issac", 30, "issac.centenoc@axity.com", "México"];
datosUsuarioSpreadParameters(...arregloDatos);


// Destructuring Array
const lista1 = [1, 2, 3];
const listaCopia = [ ...lista1 ];

let listaCopia2 = lista1;
let listaCopia3 = [ ...lista1 ];

//lista1.push(10);
//listaCopia2.push(11);

console.log("Lista Copia 2: ", listaCopia2);
console.log("Lista Copia 3: ", listaCopia3);

console.log("Lista 1: ", lista1);
console.log("Lista copia: ", listaCopia);

const lista2 = [4, 5 ,6];
const listaUnion = [ ...lista1, ...lista2 ];
console.log("Lista union: ", listaUnion);

function suma(param1, param2, param3){
    const resultado = param1 + param2 + param3;
    console.log("La suma es: ", resultado);
}

suma(lista1[0], lista1[1], lista1[2]);

function sumaPro(...parametros){
    const resultado = parametros.reduce(
        (prevValue, nextValue) => prevValue + nextValue, 0
    );
    console.log("La suma PRO es: ", resultado);
}
sumaPro(...lista1, ...lista2);

const posicion1 = lista1[0];
const posicion2 = lista1[1];
const posicion3 = lista1[2];

console.log("Posiciones: ", posicion1, posicion2, posicion3);

const [p1, , p3] = lista1;
console.log("Posiciones 2: ", p1, p3);

const listaNumeros = [12, 24, 36, 48, 60, 72];
const [pos1, pos2, ...restoElementos] = listaNumeros;

console.log("Posiciones 3: ", pos1, pos2, restoElementos);

// Destructuring Object
const usuario = {
    nombre: "Issac",
    apellido: "Centeno",
    edad: 30,
    email: "issac.centenoc@axity.com"
};

usuario.pais = "México";

//const { nombre, apellido, edad, correo } = usuario;
//console.log("Usuario: ", nombre, apellido, edad, correo);

// const { nombre, apellido, edad, email: correo } = usuario;
// console.log("Usuario 2: ", nombre, apellido, edad, correo);

console.log("Usuario 3: ", nombre, apellido);

const { nombre, apellido, ...restoUsuario } = usuario;
console.log("Usuario: 4: ", nombre, apellido, restoUsuario);

// TypeOf()
const numero = typeof 2;
const cadena = typeof("Hola Mundo");
const logico = typeof(true);
const objeto = typeof { nombre: "Issac" };
const funcion = typeof new Function(5+2);

console.log(numero);
console.log(cadena);
console.log(logico);
console.log(objeto);
console.log(funcion);

// Igualdad
const numero1 = 100;
const numero2 = 50;
const numero3 = "100";

const cadena1 = "diferente";
const cadena2 = "Diferente";

console.log("Igual estricto: ", numero1 === numero2);
console.log("Igual: ", numero1 == parseInt(numero3));

// Desigualdad
console.log("Desigualdad estricto: ", cadena1 !== cadena2);
console.log("Desigualdad: ", cadena1 != cadena2);

// Condicionales
const precio1 = 200;
const precio2 = 500;
const precio3 = 100;
const precio4 = 500;

console.log("Mayor que: ", precio1 > precio3);
console.log("Mayor o igual que: ", precio2 >= precio4);

console.log("Menor que: ", precio3 < precio4);
console.log("Menor o igual que: ", precio2 <= precio3);

// String Interpolation
// Comillas backtick
const persona = {
    id: 1,
    nombre: "Issac",
    apellido: "Centeno",
    edad: 30,
    correo: "issac.centeno@axity.com"
};

console.log("Persona " + persona.id + " Nombre completo: " 
        + persona.nombre + " " + persona.apellido + 
        " Edad: " + persona.edad + " años");
console.log(`
    Persona ${persona.id} \n 
    Nombre completo: ${persona.nombre} ${persona.apellido} \n 
    Edad: ${persona.edad} años \n 
    Correo ${persona.correo}`
);

// Event Loop

function main(){
    console.log("Event Loop");
    setTimeout(function timer() {
    console.log('Hola Mundo');
    }, 0);
    console.log('Otro mensaje');
}
main();
