"use strict";

import express from "express";
import { routerTareas } from "./routes/tareas.routes.js";
import {config} from "dotenv";

config();
const port = process.env.PORT||3000;

const server = express();

server.use(express.json());
server.use('/api', routerTareas);

server.get("/", (req, res) =>{
    res.status(200).send("Servidor de tareas");
});

server.use((req, res) =>{
    res.status(400).send("Pagina no encontrada");
})

server.listen(port, ()=>{
    console.log(`Servidor escuchando en  http://localhost:${port}`);
})