"use strict";

import inquirer from "inquirer";

const carrito = [];

/**
 * @function preguntarDatos
 * @description Pregunta por los detalles del producto (o 'fin').
 * @returns {Promise<Object>} Un objeto con las respuestas.
 */
async function preguntarDatos() {
    const productos = await inquirer.prompt([
        {
            type: 'input',
            name: 'nombre',
            message: 'Introduzca nombre de producto (o "fin" para terminar)',
            validate(dato) {
                if (dato.trim().toLowerCase() === "fin") return true;
                return dato.trim() !== "" ? true : "Por favor, introduce el nombre.";
            },
        },
        {
            type: 'input',
            name: 'precio',
            message: 'Introduzca el precio unitario:',
            when: (answers) => answers.nombre.toLowerCase() !== "fin",
            validate: (dato) => !isNaN(parseFloat(dato)) && parseFloat(dato) > 0 || "Precio inválido.",
            filter: (dato) => parseFloat(dato),
        },
        {
            type: 'input',
            name: 'cantidad',
            message: 'Introduzca la cantidad:',
            when: (answers) => answers.nombre.toLowerCase() !== "fin",
            validate: (dato) => !isNaN(parseInt(dato)) && parseInt(dato) > 0 || "Cantidad inválida.",
            filter: (dato) => parseInt(dato),
        },
        // Puedes añadir más campos (categoria, iva, etc.) aquí
    ]);

    return productos;
}

const main = async () => {
    let input = await preguntarDatos();

    while (input.nombre.toLowerCase() !== "fin") {
        carrito.push({
            nombre: input.nombre,
            precio: input.precio,
            cantidad: input.cantidad,
            // ...añade aquí las otras propiedades que captures (categoria, iva, etc.)
        });
        console.log(`✅ Producto '${input.nombre}' añadido.`);
        input = await preguntarDatos();
    }

    console.log("--- Recolección de datos finalizada ---");
    console.log("Carrito final:", carrito);
};

main();