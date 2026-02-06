import express from 'express';

import cors from 'cors';


import {PORT} from './config.js'
import { routerAcademias } from './router/academia.router.js';
import { conexionBD } from './data/db.js';


const app = express();

const corsOption ={
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}
app.use(cors(corsOption)); //habilitar cors

app.use(express.json()); // Para parsear JSON en el body


// app.use('/api', usuarioRoutes);
 app.use('/api', routerAcademias);
// app.use('/api', cursoRoutes);
// app.use('/api', categoriaRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'API REST con Express.js',
    })
});
// Manejar rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).json({ message: 'Página no encontrada' });
});

// Iniciar el servidor
conexionBD()
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        })
    })
    .catch (err=>{
        console.log('No se pudo iniciar el servidor', err.message);
        process.exit(1); //salir si no ha conexión
    })


