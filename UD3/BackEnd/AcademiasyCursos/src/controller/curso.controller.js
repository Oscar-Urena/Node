"use strict";

import { Curso } from "../models/curso.model.js";

export const getCursos = (req, res) => {
    try {
        const response = Curso.find();
        res.status(200).json({
            data: response.data
        })
    } catch (error) {
        res.status(500).json({ message: "Error al obtener categoria", error: error.message });
    }
};

export const getCurso = async (req, res) => {
    try {
        const { titulo } = req.params;
        const response = await Curso.findOne({ titulo });
        res.status(200).json({ data: response });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener categoria", error: error.message });
    }
};

export const postCurso = async (req, res) => {
    try {
        const { titulo, descripcion, precio } = req.body;

        const existe = await Curso.findOne({ titulo });
        if (existe) {
            return res.status(400).json({ message: "La categoría ya está en nuestro sistema", data: existe })
        }
        const CursoNuevo = await Curso.create({
            titulo,
            descripcion,
            precio
        })

        res.status(200).json({
            message: "Curso creado",
            data: CursoNuevo
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export const updateCurso = (req, res) => {
    try {
        const { id } = req.params;

        const respuesta = Categoria.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true

        });
        if (!respuesta) {
            return res.status(400).json({
                message: "Curso actualizado",
                data: respuesta
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

export const deleteCurso = (req, res) => {
    try {
        const { id } = req.params;

        const respuesta = Categoria.findByIdAndDelete(id, {
            new: true,
            runValidators: true

        });
        if (!respuesta) {
            return res.status(400).json({
                message: "Curso eliminado",
                data: respuesta
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};