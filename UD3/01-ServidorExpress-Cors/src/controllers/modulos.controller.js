"use strict";

import {pool} from "../data/db.js";

export const getModulos = async (req, res)=>{
    try {
        const [result] = await pool.query("SELECT * FROM modulos");
        console.log(result);
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

