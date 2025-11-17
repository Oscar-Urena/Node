"use strict";

import express from "express";
import {config} from "dotenv";

config();
const port = process.env.PORT ||3000;
// crear el servidor
const server = express();

server.set("view engine", "ejs");
server.set("views", "./src/views");

server.get("/", (req, res) => {
  res.status(200).send("Hola mundo Servidor de Node.js funcionando con nodemon");
});
server.get("/about", (req, res) => {
  //res.status(200).send("About page");
  res.render("inicio", {titulo: 'Página de Inicio', nombre: 'Óscar Ureña'})
});
server.use((req, res)=>{
    res.status(404).send("Pagina no encontrada");
});


server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
