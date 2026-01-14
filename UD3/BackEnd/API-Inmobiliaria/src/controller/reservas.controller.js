import { pool } from "../data/db.js";

export const getReservas = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM reservas");
        if (result.length == 0) {
            res.status(400).json({ data: [], message: "No hay Reservas registrados" });
        }
        console.log(result);
        res.status(200).json({ data: result });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener Reservas" });
    }
}

export const getReserva = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("SELECT * FROM reservas WHERE idreserva = ?", [id]);
        if (result.length == 0) {
            res.status(400).json({ data: [], message: "No existe un inmueble registrados con ese id" });
        }
        console.log(result);
        res.status(200).json({ data: result });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener Reservas" });
    }
}

export const postReserva = async (req, res) => {}

export const putReserva = async (req, res) => {}

export const deleteReserva = async (req, res) => {}