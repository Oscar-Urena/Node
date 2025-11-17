"use strict";
//? Simulacion de un proceso de compra en linea
//? Revisamos el inventario
//? Revisamos el saldo y procesamos el pago
//? Enviamos la notificacion al email
//? Cada etapa sera una funcion que devuelva una promesa
//? Primero lo haremos con .then .catch y despues con async/await

const aProductos = ["Pantalon", "Camisa", "Falda", "Vestido"]; 
const saldo = 100;

// Revisar el inventario
const verificarAlmacen = (producto) => {
  return new Promise((resolve, reject) => {
    console.log(`Verificando inventario para el producto ${producto}`);
    setTimeout(() => {
      const existe = aProductos.find(
        (elemento) =>
          elemento.toLocaleLowerCase() === producto.toLocaleLowerCase()
      );
      if (existe) {
        resolve(`Producto ${producto} encontrado`);
      } else {
        reject(`Producto ${producto} no encontrado`);
      }
    }, 1500);
  });
};

// Revisar el saldo
const verificarSaldo = (pago) => {
  return new Promise((resolve, reject) => {
    console.log(`Procesando pago`);
    setTimeout(() => {
      const bPago = saldo >= pago;
      if (bPago) {
        resolve(`Pago aprobado`);
      } else {
        reject(`Pago no aprobado`);
      }
    }, 1500);
  });
};
// Enviar email
const verificarEmail = (email) => {
  return new Promise((resolve, reject) => {
    console.log(`Enviando confirmacion del cobro`);
    setTimeout(() => {
      if (email.includes("@")) {
        resolve(`Confirmacion enviada a ${email}`);
      } else {
        reject(`Email invalido`);
      }
    }, 1500);
  });
};
console.log("\nEjecucion con .then y .catch");
verificarAlmacen("Pantalon")
  .then((mensaje) => {
    console.log(mensaje);
    return verificarSaldo("50");
  })
  .then((mensaje) => {
    console.log(mensaje);
    return verificarEmail("emailerroneo");
  })
  .then((mensaje) => {
    console.log(mensaje);
    console.log("Compra completada");
  })
  .catch((error) => {
    console.log(error);
  });
// Main async/await
const main = async () => {
  console.log("\nEjecucion con async/await");
  try {
    console.log(await verificarAlmacen("Pantalon"));
    console.log(await verificarSaldo("50"));
    console.log(await verificarEmail("correo@correo.es"));
    console.log("Compra completada");
  } catch (error) {
    console.log(error);
  }
};
// Ejeccucion del programa
setTimeout(() => {
  // Añado la espera para que no se ejecuten los dos a la vez
  main();
}, 5000);
