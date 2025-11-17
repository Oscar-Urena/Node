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
// Funcion main para llamar varias veces a la funcion promesa, 
// porque para usar wait este debe estar dentro de una funcion con async.
// Dependiendo de como se declare la funcion async se pone antes o despues
// async function main () {
const main = async () => {
    try{
        const mensajeI = await ejecutarPromesa("Primer tiempo muerto");
        console.log(mensajeI);
        const mensajeII = await ejecutarPromesa("Segundo tiempo muerto");
        console.log(mensajeII);
        const mensajeIII = await ejecutarPromesa("Tercer tiempo muerto");
        console.log(mensajeIII);
        const mensajeIIII = await ejecutarPromesa("Cuarto tiempo muerto");
        console.log(mensajeIIII);
        finalizar();
    } catch (error) {
        console.log(error);
    }
}

// Programa
console.log("Iniciando...");
main();
