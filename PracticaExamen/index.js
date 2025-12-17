function contarHasta100000() {
  return new Promise((resolve) => {
    let contador = 0;

    function incrementar() {
      // Contamos en bloques para no bloquear el hilo
      for (let i = 0; i < 1000; i++) {
        contador++;
        if (contador === 100000) {
          resolve("Conteo terminado: " + contador);
          return;
        }
      }

      // Dejamos respirar al event loop
      setTimeout(incrementar, 0);
    }

    incrementar();
  });
}

async function ejecutarConteo() {
  console.log("Iniciando conteo...");

  const resultado = await contarHasta100000();

  console.log(resultado);
}

ejecutarConteo();
