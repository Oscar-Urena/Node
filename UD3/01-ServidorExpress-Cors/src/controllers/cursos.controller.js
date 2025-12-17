"use strict";

import {pool} from "../data/db.js";

export const getCursos = async (req, res)=>{
    try {
        const [result] = await pool.query("SELECT * FROM cursos");
        console.log(result);
        //const dato = result[0][0].idCurso;
        const dato = result;
        res.status(200).json({
            data: dato
        })
    } catch (error) {
        res.status(200).json({
            message: `No se pudo hacer la consulta`
        })
    }
}

