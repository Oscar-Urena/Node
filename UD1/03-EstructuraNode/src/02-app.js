"use strict";

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})
console.log("Bienvenidos al primer proyecto de node.js");

// const nombre = rl.question("¿Cómo te llamas?");
// const edad = rl.question("¿Cuál es tu edad?");

rl.question("Introduzca su nombre", nombre =>{
    r1.question("Introduce su edad:", edad =>{
        console.log(`El nombre es ${nombre}. La edad es: ${edad}`);
        r1.close();
    })
})