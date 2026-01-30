"use strict";

import { conexionBD } from '../data/db.js'
import { ObjectId } from 'mongodb';

export const getModulos = async (req, res) => {
    try {

        const database = await conexionBD();
        const collection = database.collection("modulos");

        const resultado = await collection.find({}).toArray();

        if (resultado.length == 0) {
            res.status(200).json({ data: [] });
        }
        res.status(200).json({ data: resultado });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los módulos", error: error.message });
    }
};

export const getModulo = async (req, res) => {
    try {
        const { id } = req.params;
        const database = await conexionBD();
        const collection = database.collection("modulos");

        const resultado = await collection.find({_id: new ObjectId(id)}).toArray();

        if (resultado.length == 0) {
            res.status(200).json({ data: [] });
        }
        res.status(200).json({ data: resultado });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los módulos", error: error.message });
    }
};

export const getModuloID = async (req, res) => {
    try {
        const { idModulo } = req.params;
        const database = await conexionBD();
        const collection = database.collection("modulos");

        const resultado = await collection.find({idModulo:idModulo}).toArray();

        if (resultado.length == 0) {
            res.status(200).json({ data: [] });
        }
        res.status(200).json({ data: resultado });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los módulos", error: error.message });
    }
};

export const addModulo = async (req, res) => {
    try {

        const { descripcion, idCurso } = req.body;

        const database = await conexionBD();
        const collection = database.collection("modulos");

        const resultado = await collection.insertOne({
            descripcion,
            idCurso
        })
        console.log(resultado);
        res.status(200).json({ id: resultado.insertId });
    } catch (error) {
        res.status(500).json({ message: "Error al anadir los módulos", error: error.message });
    }
};

export const updateModulo = async (req, res) => {
    try {
        console.log(req.body);
        const { descripcion, idCurso } = req.body;
        const { id } = req.params;

        const database = await conexionBD();
        const collection = database.collection("modulos");
        const resultado = await collection.updateOne(
            { _id: new ObjectId(id) },
            {
                $set: {
                    descripcion,
                    idCurso
                }
            }
        )
        console.log(resultado);
        if (resultado.modifiedcount == 0) {
            return res.status(400).json({
                message: 'El módulo no existe'
            })
        }
        res.status(200).json({
            message: 'El módulo ha sido actualizado'
        })

    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el módulo",
            error: error.message
        })
    }
};

export const deleteModulo = async (req, res) => {
    try {
        const { id } = req.params;
        const database = await conexionBD();
        const collection = database.collection("modulos");
        const result = await collection.deleteOne({
            _id: new ObjectId(id)
        })
        console.log(result.deletedCount);
        if (result.deletedCount == 0) {
            return res.status(400).json({
                message: "El módulo no existe"
            })
        } else {
            return res.status(200).json({
                message: "El módulo ha sido borrado"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al borrar el módulo",
            error: error.message
        })
    }
};