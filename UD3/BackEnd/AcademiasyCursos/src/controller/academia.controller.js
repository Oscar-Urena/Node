"use strict";

import { Academia } from '../models/academia.model.js';
import { Curso } from '../models/curso.model.js';

export const getAcademias = async (req, res) => {
    try {
        const response = await Academia.find();
        res.status(200).json({ data: response });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener alumnos", error: error.message });
    }
}

export const getAcademia = async (req, res) => {
    try {
        const { nombre } = req.params;
        const response = await Academia.findOne({ nombre });
        if (!response) {
            return res.status(201).json({ message: "No se encuentra esa academia" })
        }
        res.status(200).json({ data: response });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener alumnos", error: error.message });
    }
}

export const getCursosFromAcademia = async (req, res) => {
    try {
        const { nombre } = req.params;
        const response = await Academia.findOne({ nombre });
        if (!response) {
            return res.status(201).json({ message: "No se encuentra esa academia" })
        }
        res.status(200).json({ cursos: response.curso });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener alumnos", error: error.message });
    }
};

export const postAcademia = async (req, res) => {
    try {
        const { nombre, direccion, cursos } = req.body;
        const academiaExisteNombre = await Academia.findOne({ nombre });
        const academiaExisteDireccion = await Academia.findOne({ direccion });
        if (academiaExisteNombre && academiaExisteDireccion) {
            if (academiaExisteDireccion._id == academiaExisteNombre._id) {
                return res.status(403).json({
                    message: "Esta academia ya está registrada en nuestro sistema"
                })
            }
        }
        const nuevaAcademia = await Academia.create({
            nombre,
            direccion,
            cursos
        })
        console.log(nuevaAcademia);
        res.status(200).json({
            message: "Academia creada",
            data: nuevaAcademia
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addCursoToAcademia = async (req, res) => {
    try {
        const { nombre } = req.params;
        const { titulo, precio } = req.body;
        const response = await Curso.findOne({ titulo });
        if(!response){
            return res.status(401).json({message: "No está ese curso registrado en nuesta BBDD"});
        }
        const response1 = await Academia.findOne({ nombre });
        if (!response1) {
            return res.status(201).json({ message: "No se encuentra esa academia" })
        }

        res.status(200).json({ cursos: response1.curso });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener alumnos", error: error.message });
    }
};



export const updateAcademia = async (req, res) => {
    try {
        const { _id } = req.params;
        const resultado = await Academia.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidators: true
        });
        if (!resultado) {
            return res.status(400).json({
                message: 'Curso no encontrado'
            })
        }
        res.status(200).json({
            message: "Curso actualizado",
            data: resultado
        })
    } catch (error) {
        res.status(500).json({ error });
    }
};


export const updateCursoAcademia = async (req, res) => {

};


export const deleteAcademia = async (req, res) => {
    try {
        const { id } = req.params;
        const academia = await Academia.findByIdAndDelete(id);
        if (!academia) {
            return res.status(404).json({
                message: "La academia introducida no existe"
            })
        }
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const deleteCursoAcademia = async (req, res) => {

};
