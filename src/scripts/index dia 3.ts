import { Mascota } from "./modulo2";

let flag: boolean = true;
let cadena: string = "cadena";
let numero: number = 5;


let cualquiera: any = ""; // Acepta cualquier tipo de dato

/* Type */
type Usuario = {
    id: number,
    nombre: string,
    edad: number,
    pais?: string
}

let persona: Usuario;
let persona2: Usuario;

function getUsuario(usuario: Usuario): boolean {
    console.log(usuario);
    return true;
}

persona2 = {
    id: 2,
    nombre: "Luis",
    edad: 12
}

persona = {
    id: 1,
    nombre: "Issac",
    edad: 23,
}

console.log("Usuario: ", getUsuario(persona2));

console.log("Usuario 2: ", getUsuario({ id: 3, nombre: "Issac", edad: 23 }));

interface IUsuario {
    id: number,
    nombre: string,
    edad: number,
    pais?: string,
    rol: IRol
} 

interface IRol {
    id: number,
    rol: string,
}

// interface IUsuario {
//     genero: "M",
//     telefono: 333333333,
// }

let user: IUsuario;

user = {
    id: 2,
    nombre: "Luis",
    edad: 12,
    rol: {
        id: 1,
        rol: "Developer"
    }
}

console.log("User:", user);

function getUsuarioInterface(usuario: IUsuario): boolean {
    console.log("User Interface:", usuario);
    return true;
}

/* Class */
let perro = new Mascota("Peluchin");
console.log(perro.obtenerNombre());
console.log(Mascota.obtenerPeso());

console.log(perro);

/* Asyn Await */

interface IPost {
    id: number,
    titulo: string,
    img: string,
    tags: string[]
}

const posts: IPost[] = [{
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

function getPosts(): Promise<IPost[]> {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(posts);
        }, 3500);
    })
}

interface IPostReponse {
    id: number,
    titulo: string,
    img: string,
    tags: string[]
}

async function obtenerPosts(): Promise<any> {
    try {
        const datos = await getPosts();
        // if(datos !== null){
        //     //Lanzar otra promesa
        // }
        console.log("Promesa Async: ", datos);
        return datos;
    } catch (error) {
        console.error(error);
    }
}

obtenerPosts();