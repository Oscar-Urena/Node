"use strict";

//importar http de node.js
import http from "http";
import {config} from "dotenv";

config();
const port = process.env.PORT ||3000;
// crear el servidor
const server = http.createServer((req, res) =>{
    //console.log(res);
    if(req.url === "/"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.end("Hola mundo Servidor de Node.js funcionando con nodemon");
    }else if(req.url === "/about"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.end("About page");
    }else if(req.url === "/"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.end("Hola mundo Servidor de Node.js funcionando con nodemon");
    }
});

server.listen(port, ()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
});