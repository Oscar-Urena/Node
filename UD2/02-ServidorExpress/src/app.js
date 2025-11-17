"use strict";

//importar http de node.js
import express from "express";
const port = 3000;
// crear el servidor
const server = express();

server.get("/", (req, res) => {
  res.status(200).send("Hola mundo Servidor de Node.js funcionando con nodemon");
});
server.get("/about", (req, res) => {
  res.status(200).send("About page");
});
server.use((req, res)=>{
    res.status(404).send("Pagina no encontrada");
});


server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
