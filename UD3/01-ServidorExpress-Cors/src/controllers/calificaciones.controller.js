"use strict";

import {pool} from "../data/db.js";


export const getCalificaciones = async (req, res) => {

  try {
    const [result] = await pool.query(`SELECT * FROM calificaciones`);
    console.log(result);
    return res.status(200).json({
      data: result
    })
  } catch (error) {

  }
};

export const postCalificaciones = async (req, res)=>{
    try {
        const {idModulo,idCurso,  idAlumno, calificacion} = req.body; 
        
        if(!idCurso|| !idModulo|| !idAlumno|| !calificacion){
            return res.status(400).json({
                message:"Debes introducir todos los campos."
            })
        }
        await pool.query("INSERT INTO calificaciones (idCurso, idModulo, idAlumno, calificacion) VALUES (?, ?, ?, ?)", [idCurso, idModulo, idAlumno, calificacion]);
        res.status(200).json({
            message: "Todo correcto."
        })
    } catch (error) {
        res.status(518).json({
                message:"Murio.",
                error: error.message
            })
    }
}


