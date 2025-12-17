"use strict";

import {pool} from "../data/db.js";

export const postCalificaciones = async (req, res)=>{
    try {
        console.log(req.body);
        const {idModulo,idCurso,  idAlumno, calificacion} = req.body; 
        
        if(!idCurso|| !idModulo|| !idAlumno|| !calificacion){
            res.status(400).json({
                message:"Debes introducir todos los campos."
            })
        }
        await pool.query("INSERT INTO calificaciones (idCurso, idModulo, idAlumno, calificacion) VALUES (?, ?, ?, ?)", [idCurso, idModulo, idAlumno, calificacion]);
        res.status(200).json({
            message: "Todo correcto."
        })
    } catch (error) {
        res.status(500).json({
                message:"Murio."
            })
    }
}


