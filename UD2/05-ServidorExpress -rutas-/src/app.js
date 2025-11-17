"use strict";

import express from "express";
import { routerUsuarios } from "./routes/usuario.routes.js";
import {config} from "dotenv";

config();
const port = process.env.PORT ||3000;
// crear el servidor
const server = express();

server.use('/api', routerUsuarios);


server.get("/", (req, res) => {
  res.status(200).send("Hola mundo Servidor de Node.js funcionando con nodemon");
});

server.use((req, res)=>{
    res.status(404).send("Pagina no encontrada");
});


server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
