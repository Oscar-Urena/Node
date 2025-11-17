"use strict";

const ejecutarPromesa = (mensaje) => {
    // Creamos la promesa
    return new Promise((resolve, reject) => {
        // Exito aleatorio para probar cuando se puede cumplir y cuando no
        const exito = Math.random()>0.2;
        // "Usamos el timeout para que no vaya tan rapido"
        setTimeout(() => { 
            if(exito){            
                resolve(mensaje);
            } else {
                reject("Error en el tiempo mureto")
            }
        }, 1500);
    })
}
const finalizar = () => {
    console.log("...Finzalizado");
}

// Programa
console.log("Iniciando...");
// Llamos a la funcion de promesa
ejecutarPromesa("Primer tiempo muerto")
.then(mensaje => {
    // Si el resultado es el esperado entra aqui
    console.log(mensaje);
    // Para anidar promesas debemos retornar las promesas y añadir un then por cada promesa ejecutada
    return ejecutarPromesa("Segundo tiempo muerto");
})
.then(mensaje => {
    // Si el resultado es el esperado entra aqui
    console.log(mensaje);
    // Para anidar promesas debemos retornar las promesas y añadir un then por cada promesa ejecutada
    return ejecutarPromesa("Tercer tiempo muerto");
})
.then(mensaje => {
    // Si el resultado es el esperado entra aqui
    console.log(mensaje);
    finalizar();
})
// El catch recogera cualquier promesa no cumplida
.catch(error=>{
    // Si el resultado no es el esperado entra aqui
    console.log(error);
})
// Los nombres de "mensaje" y "error" no importan, simplemente es para darle un nombre a lo que devuelve la promesa
// "Los callback no se usan ya, solo las promesas"