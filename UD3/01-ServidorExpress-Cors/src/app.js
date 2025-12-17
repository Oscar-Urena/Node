"use strict";

import express from "express";
import cors from "cors";
import {config} from "dotenv";
import { routerCursos } from "./routes/cursos.routes.js";
import { routerModulos } from "./routes/modulos.routes.js";
import { routerAlumnos } from "./routes/alumnos.routes.js";
import { routerCalificaciones } from "./routes/calificaciones.routes.js";

config();


const port = process.env.PORT ||3000;
const optCors = {
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}
// crear el servidor
const server = express();

server.use(cors(optCors));

server.use(express.json()); 

server.use('/api', routerCursos);
server.use('/api', routerModulos);
server.use('/api', routerAlumnos);
server.use('/api', routerCalificaciones);



server.get("/", (req, res) => {
  res.status(200).send("Hola mundo Servidor de Node.js funcionando con nodemon");
});

server.use((req, res)=>{
    res.status(404).send("Pagina no encontrada");
});


server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
