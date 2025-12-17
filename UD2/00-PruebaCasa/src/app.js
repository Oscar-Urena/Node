"use strict"

import express from "express";
import { routerPrueba } from "./routes/prueba.routes.js";
import { config } from "dotenv";

config();
const port = process.env.PORT;
const server = express();

server.use("/api", routerPrueba);
server.get("/", (req, res) =>{
    res.status(200).send("Servidor de prueba");
});

server.use((req, res) =>{
    res.status(400).send("Página no encontrada");
});

server.listen(port, ()=>{
    console.log(`Servidor escuchando en https://localhost${port}/api`);
})