"use strict";

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})


const pedirDatos = (pregunta) =>{
    return new Promise((resolve)=>{
        try {
            rl.question(pregunta, dato =>{
            resolve(dato)
        })
        } catch (error) {
          reject("Error en la entrada de datos");  
        }
    })
}
const main = async()=>{
    try {
        console.log("Bienvenidos al primer proyecto de node.js");
        const nombre = await pedirDatos("Introduce el nombre");
        const edad = await pedirDatos("Introduce la edad");
        console.log(`El nombre es ${nombre} y tiene ${edad} años`);
    } catch (error) {
        console.log(error);
    }
}

main();
// const nombre = rl.question("¿Cómo te llamas?");
// const edad = rl.question("¿Cuál es tu edad?");

// rl.question("Introduzca su nombre", nombre =>{
//     r1.question("Introduce su edad:", edad =>{
//         console.log(`El nombre es ${nombre}. La edad es: ${edad}`);
//         r1.close();
//     })
// })