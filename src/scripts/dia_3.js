/* LAB 9 */
/* Try - Catch */
/* Finally */
try {
    console.log("Aquí evalauamos nuestra funcionalidad");
    if(true) {
        console.log("Aquí estoy generando un código cool");
    }
    funcionNoExite();
} catch (error) {
    console.error("Me ejecuto si surge un error en el try");
    console.error(`Este es el error ${error}`);
} finally {
    console.info("Siempre me voy a ejecutar después de un bloque try-catch");
}

/* Errors */
try {
    let numero = "10";
    if(typeof numero !== "number"){
        //throw new Error("La variable introducida no es un número.");
    }
    console.log(numero * numero);
} catch (error) {    
    console.error(`Se produjo el siguiente error: ${error}`);
}

/* Callbacks */
// async function inicio(final) {
//     setTimeout(() => {
//         console.log("Me ejecuto primero");
//         final();
//     }, 3000);
// }

// function final(){
//     console.log("Me ejecuto al final");
// }

// inicio(final);

/* Promises */
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

// const getPosts = () => {
//     return posts;
// };

const getPosts = () => {
    return new Promise((resolve, reject) => {
        if(posts.length === 0){
            reject(new Error("No hay posts"));
        }
        setTimeout(function() {
            resolve(posts);
        }, 1500);
    });

    // Restructurar
    // const compras = new Promise((resolve, reject) => {
    //     const usuarios = new((resolve, reject) => {
    //         resolve(usuarios);
    //         resolve(comprasPorUsuario)
    //     });
    // });
};

getPosts()
    .then((posts) => {console.log(posts)})
    .catch(error => console.error(error));
// console.log(getPosts());