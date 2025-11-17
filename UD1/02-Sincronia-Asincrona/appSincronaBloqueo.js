"use strict";

const funcionLarga = ()=>{
    const inicio = Date.now();
    while(Date.now()-inicio < 5000){
        //Bloqueo de 5 segundos
    }
    return "Hola";
}

// Principal
console.log("Iniciando");

// Bloqueo
const resultado = funcionLarga();
console.log(resultado);
console.log("...Finalizado");