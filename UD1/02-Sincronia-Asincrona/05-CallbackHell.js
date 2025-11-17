"use strict";

const tarea1 = (callback) => {
    setTimeout(() => {
        console.log("Primer tiempo muerto completado");
        callback(); // Llama a la funcion que se ha pasado como parametro
    }, 1500)
}
const tarea2 = (callback) => {
    setTimeout(() => {
        console.log("Segundo tiempo muerto completado");
        callback(); // Llama a la funcion que se ha pasado como parametro
    }, 1500)
}
const tarea3 = (callback) => {
    setTimeout(() => {
        console.log("Tercer tiempo muerto completado");
        callback(); // Llama a la funcion que se ha pasado como parametro
    }, 1500)
}

const finalizar = () => {
    console.log("...Finzalizado");
}

tarea1(function(){
    tarea2(function(){
        tarea3(function(){
            finalizar();
        })
    })
})