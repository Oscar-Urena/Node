"use strict";

import { Categoria } from "../models/categoria.model.js";

export const getCategorias = async (req, res) => {
    try {
        const response = await Categoria.find();
        res.status(200).json({ data: response });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener categoria", error: error.message });
    }
};

export const getCategoria = async (req, res) => {
    try {
        const { nombre } = req.params;
        const response = await Categoria.findOne({ nombre });
        res.status(200).json({ data: response });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener categoria", error: error.message });
    }
};

export const postCategoria = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;

        const existe = await Categoria.findOne({ nombre });
        if (existe) {
            return res.status(400).json({ message: "La categoría ya está en nuestro sistema", data: existe })
        }
        const categoriaNueva = await Categoria.create({
            nombre,
            descripcion
        })

        res.status(200).json({
            message: "Categoría creada",
            data: categoriaNueva
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export const updateCategoria = (req, res) => {
    try {
        const { id } = req.params;

        const respuesta = Categoria.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
            
        });
        if (!resultado){
            return res.status(400).json({
                message: "Curso actualizado",
                data: resultado
            })
        }
    } catch (error) {

    }
};

export const deleteCategoria = (req, res) => { };