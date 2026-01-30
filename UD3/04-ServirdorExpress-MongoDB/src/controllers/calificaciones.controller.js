"use strict";

import { ObjectId } from "mongodb";
import { conexionBD } from "../data/db.js";

export const getCalificaciones = async (req, res) => {
    try {

        const database = await conexionBD();
        const collection = database.collection("calificaciones");

        const result = await collection.find({}).toArray();

        if (result.length == 0) {
            return res.status(200).json({ data: [] });
        }
        console.log(result);
        res.status(200).json({ data: result });
    } catch (error) {
        res
            .status(500)
            .json({ message: "Error al obtener cursos", error: error.message });
    }
};

export const getCalificacion = (req, res) => { };

export const addCalificacion = async (req, res) => {
    try {
        const { idAlumno, idCurso, idModulo, Calificacion } = req.body;

        const database = await conexionBD();
        const collection = database.collection("calificaciones");
        
        const collectionAlumno = database.collection("alumnos");
        const resultAlumno = await collection.find({_id: new ObjectId(id)}).toArray();
        const collectionCruso = database.collection("crusos");
        const resultCruso = await collection.find({_id: new ObjectId(id)}).toArray();
        const collectionModulos = database.collection("modulos");
        const resultModulos = await collection.find({_id: new ObjectId(id)}).toArray();
        const result = await collection.insertOne({
            idAlumno, idCurso, idModulo, Calificacion
        })
        console.log(result);
        res.status(201).json({ id: result.insertedId });
    } catch (error) {
        res.status(500).json({
            message: "Error al insertar el curso", error: error.message
        })
    }
};



export const updateCalificacion = (req, res) => { };

export const deleteCalificacion = (req, res) => { };


