import { pool } from '../data/db.js';


export const getInmuebles = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM inmuebles");
        if (result.length == 0) {
            res.status(400).json({ data: [], message: "No hay inmuebles registrados" });
        }
        console.log(result);
        res.status(200).json({ data: result });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener inmuebles" });
    }
}

export const getInmueble = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("SELECT * FROM inmuebles WHERE idinmueble = ?", [id]);
        if (result.length == 0) {
            res.status(400).json({ data: [], message: "No existe un inmueble registrados con ese id" });
        }
        console.log(result);
        res.status(200).json({ data: result });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener inmuebles" });
    }
}

export const getInmuebleZonas = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("SELECT * FROM inmuebles WHERE zona = ?", [id]);
        if (result.length == 0) {
            res.status(400).json({ data: [], message: "No existe un inmueble registrados con ese id" });
        }
        console.log(result);

        res.status(200).json({ data: result });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener inmuebles" });
    }
}

export const postInmueble = async (req, res) => {
    try {

        const { zona, tipo, domicilio, habitaciones, banos, metros_cuadrados, precio, reservado } = req.body;
        const [result] = await pool.query("INSERT INTO inmuebles (zona, tipo_inmueble, domicilio, habitaciones, banos, metros_cuadrados, precio, reservado) VALUES (?,?,?,?,?,?,?,?)");
        if (result.length == 0) {
            res.status(400).json({ data: [], message: "No hay inmuebles registrados" });
        }
        console.log(result);
        res.status(200).json({ data: result });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener inmuebles" });
    }
}

export const putInmueble = async (req, res) =>{}

export const patchInmueble = async (req, res) =>{}

export const deleteInmueble = async (req, res) =>{}