"use strict";

import { Curso } from "../models/curso.model.js";

export const getCursos = (req, res) => {
    try {
        const response = Curso.find();
        res.status(200).json({
            data: response.data
        })
    } catch (error) {
        
    }
};

export const getCurso = (req, res) => {};

export const postCurso = (req, res) => {};

export const updateCurso = (req, res) => {};

export const deleteCurso = (req, res) => {};