"use strict";

const saludo = (callback) => {
    setTimeout(() => {
        console.log("Hola");
        callback(); // Llama a la funcion que se ha pasado como parametro
    }, 5000)
}

const finalizar = () => {
    console.log("Finalizando");
}

saludo(finalizar);