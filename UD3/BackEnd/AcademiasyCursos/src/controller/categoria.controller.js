"use strict";

import { Categoria } from "../models/categoria.model.js";

export const getCategorias = async (req, res) => {
    try {
        const response = await Categoria.find();
        console.log(response);
        res.status(200).json({ data: response });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener categoria", error: error.message });
    }
};

export const getCategoria = (req, res) => { };

export const postCategoria = (req, res) => { };

export const updateCategoria = (req, res) => { };

export const deleteCategoria = (req, res) => { };