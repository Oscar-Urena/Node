"use strict";

import readline from "readline";

const notas = [2];

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})


const pedirDatos = (pregunta) =>{
    return new Promise((resolve, reject)=>{
        try {
            rl.question(pregunta, dato =>{
            resolve(dato)
        })
        } catch (error) {
          reject("Error en la entrada de datos");  
        }
    })
}

const calcularPromedio = (notas) =>{
    return new Promise((resolve, reject) =>{
        try {
            setTimeout(() =>{
                const media = notas.reduce((acum, nota) => acum +=nota, 0) / notas.length;
            resolve(media);
            }, 2000);
        } catch (error) {
            reject("Error calculando la media");
        }
    })
}
const main = async()=>{
    try {
        console.log("Bienvenidos al segundo proyecto de node.js");
        let input = "";
        do{
            input = await pedirDatos(`Introduce una nota o "fin" para terminar: `);
            if(input!== "fin" && input >= 0 && input <= 10){
                notas.push(Number(input));
            }
        }while(input !== "fin");
        const media = await calcularPromedio(notas);
        if(media > 5){
            console.log(`El promedio del alumno ha sido ${media} y está aprobado`);
        }
        else{
            console.log(`El promedio del alumno ha sido ${media} y está suspenso`);
        }
        
    } catch (error) {
        console.log(error);
    }
    rl.close();
}

main();