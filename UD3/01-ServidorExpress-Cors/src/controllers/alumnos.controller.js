"use strict";

import { pool } from "../data/db.js";

export const getAlumnos = async (req, res) => {

  try {
    const { curso } = req.params;
    const [result] = await pool.query(`SELECT * FROM alumnos where idCurso = ?`, [curso]);
    console.log(result);
    return res.status(200).json({
      data: result
    })
  } catch (error) {

  }
};
