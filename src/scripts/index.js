var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Mascota } from "./modulo2";
let flag = true;
let cadena = "cadena";
let numero = 5;
let cualquiera = ""; // Acepta cualquier tipo de dato
let persona;
let persona2;
function getUsuario(usuario) {
    console.log(usuario);
    return true;
}
persona2 = {
    id: 2,
    nombre: "Luis",
    edad: 12
};
persona = {
    id: 1,
    nombre: "Issac",
    edad: 23,
};
console.log("Usuario: ", getUsuario(persona2));
console.log("Usuario 2: ", getUsuario({ id: 3, nombre: "Issac", edad: 23 }));
// interface IUsuario {
//     genero: "M",
//     telefono: 333333333,
// }
let user;
user = {
    id: 2,
    nombre: "Luis",
    edad: 12,
    rol: {
        id: 1,
        rol: "Developer"
    }
};
console.log("User:", user);
function getUsuarioInterface(usuario) {
    console.log("User Interface:", usuario);
    return true;
}
/* Class */
let perro = new Mascota("Peluchin");
console.log(perro.obtenerNombre());
console.log(Mascota.obtenerPeso());
console.log(perro);
const posts = [{
        id: 1,
        titulo: "Mi primer Post",
        img: "https://picsum.photos/200",
        tags: ["javascript", "web"]
    }, {
        id: 2,
        titulo: "Mi segundo Post",
        img: "https://picsum.photos/200",
        tags: ["javascript", "mobile"]
    }, {
        id: 3,
        titulo: "Mi tercer Post",
        img: "https://picsum.photos/200",
        tags: ["javascript", "desktop"]
    }];
function getPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(posts);
        }, 3500);
    });
}
function obtenerPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const datos = yield getPosts();
            // if(datos !== null){
            //     //Lanzar otra promesa
            // }
            console.log("Promesa Async: ", datos);
            return datos;
        }
        catch (error) {
            console.error(error);
        }
    });
}
obtenerPosts();
