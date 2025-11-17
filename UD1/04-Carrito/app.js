"use strict";

import inquirer from 'inquirer';

const carrito = [];

async function preguntarDatos() {
    const productos = await inquirer.prompt([
        {
            type: 'input',
            name: 'nombre',
            message: 'Introduzca nombre de producto (o "fin" para terminar)',
            validate(dato) {
                return dato.trim() !== "" ? true : "Por favor, introduce el nombre.";
            },
        },
        {
            type: 'input',
            name: 'precio',
            message: 'Introduce el precio del producto',
            validate(dato) {
                const num = parseFloat(dato);
                return num > 0 ? true : "Por favor, introduce un precio mayor a 0";
            },
            when(entrada) {
                return entrada.nombre.toLowerCase() !== "fin";
            }
        },
        {
            type: 'input',
            name: 'cantidad',
            message: 'Introduce el número de unidades',
            validate(dato) {
                const num = parseInt(dato);
                return num > 0 ? true : "Por favor, introduce una cantidad mayor a 0";
            },
            when(entrada) {
                return entrada.nombre.toLowerCase() !== "fin";
            }
        },
        {
            type: 'rawlist',
            name: 'categoria',
            message: 'Selecciona la categoría',
            choices: [
                "Alimentos",
                "Electrónica",
                "Ropa",
                "Hogar",
                "Otros"
            ],
            when(entrada) {
                return entrada.nombre.toLowerCase() !== "fin";
            }
        },
        {
            type: 'list',
            name: 'iva',
            message: 'Selecciona el tipo de IVA',
            choices: [
                { name: "General (21%)", value: 0.21 },
                { name: "Reducido (10%)", value: 0.10 },
                { name: "Superreducido (4%)", value: 0.04 },
            ],
            when(entrada) {
                return entrada.nombre.toLowerCase() !== "fin";
            }
        }
    ]);

    return productos;
}

function mostrarResumen() {
    console.log("\n--- RESUMEN DE COMPRA ---");
    let totalSinIVA = 0;
    let totalIVA = 0;

    carrito.forEach(p => {
        const subtotal = p.precio * p.cantidad;
        const ivaProducto = subtotal * p.iva;
        totalSinIVA += subtotal;
        totalIVA += ivaProducto;

        console.log(`\nProducto: ${p.nombre}`);
        console.log(`Categoría: ${p.categoria}`);
        console.log(`Cantidad: ${p.cantidad}`);
        console.log(`Precio unitario: ${p.precio.toFixed(2)} €`);
        console.log(`IVA aplicado: ${(p.iva * 100).toFixed(0)}%`);
        console.log(`Subtotal (sin IVA): ${subtotal.toFixed(2)} €`);
    });

    const totalConIVA = totalSinIVA + totalIVA;

    console.log("\n==============================");
    console.log(`Total sin IVA: ${totalSinIVA.toFixed(2)} €`);
    console.log(`Total IVA: ${totalIVA.toFixed(2)} €`);
    console.log(`TOTAL CON IVA: ${totalConIVA.toFixed(2)} €`);
    console.log("==============================\n");
}

const main = async () => {
    let input = await preguntarDatos();

    while (input.nombre.toLowerCase() !== "fin") {
        carrito.push({
            nombre: input.nombre,
            precio: parseFloat(input.precio),
            cantidad: parseInt(input.cantidad),
            categoria: input.categoria,
            iva: input.iva
        });
        input = await preguntarDatos();
    }

    if (carrito.length > 0) {
        mostrarResumen();
    } else {
        console.log("No se agregaron productos al carrito.");
    }
};

main();
