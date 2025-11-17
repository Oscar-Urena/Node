"use strict";

const ejecutarPromesa = () => {
    // Creamos la promesa
    return new Promise((resolve, reject) => {
        // Exito aleatorio para probar cuando se puede cumplir y cuando no
        const exito = Math.random()>0.5;
        if(exito){            
            resolve("Primer tiempo completado");
        } else {
            reject("Error en primer tiempo")
        }
    })
}
const finalizar = () => {
    console.log("...Finzalizado");
}

// Programa
console.log("Iniciando...");
// Llamos a la funcion de promesa
ejecutarPromesa()
.then(mensaje => {
    // Si el resultado es el esperado entra aqui
    console.log(mensaje);
    finalizar();
})
.catch(error=>{
    // Si el resultado no es el esperado entra aqui
    console.log(error);
})
// Los nombres de "mensaje" y "error" no importan, simplemente es para darle un nombre a lo que devuelve la promesa