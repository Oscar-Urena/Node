"use strict";

import { Academia } from '../models/academia.model.js';

export const getAcademias = async (req, res) => {
    try {
        const response = await Academia.find();
        console.log(response);
        res.status(200).json({ data: response.data });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener alumnos", error: error.message });
    }
}

export const getAcademia = async (req, res) => {

}

export const postAcademia = async (req, res) => {
};

export const updateAcademia = async (req, res) => { };

export const deleteAcademia = async (req, res) => { };