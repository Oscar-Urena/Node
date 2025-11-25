"use strict";

import { json } from "express";
import { tareas } from "../data/tareas.js";


export const getTareas = (req, res) =>{
    res.status(200).json({
        data: tareas,
        total: tareas.length
    });
};

export const getTarea = (req, res) =>{
    const { id } = req.params;
    if(isNaN(id)){
        res.status(400).json({
            message: "El id debe ser numérico"
        });
    }
    const indice = tareas.findIndex((tarea) => tarea.id == id);
    if(indice == -1){
        res.status(400).json({
            message: "El id no existe"
        });
    }else{
        res.status(200).json({
            data: tareas.at(indice)
        })
    }
};

export const postTareas = (req, res) =>{
    const {id, titulo, descripcion, completada} = req.body;
    if(id.length==0 || titulo.length==0 || descripcion.length==0 || completada.length==0){
        res.status(400).json({
            message: "Todos los campos deben estar completos"
        });
    }
    if(isNaN(id)){
        res.status(400).json({
            message: "El id debe ser un numero"
        });
    }
    tareas.push(req.body);
    res.status(200).json({
        message: `La tarea ${titulo} se ha registado con id ${id} correctamente`
    });
};

export const updateTareas = (req, res) =>{
    const { id } = req.params;
    const { titulo, descripcion, completada } = req.body;
    if(id.length==0 || titulo.length==0 || descripcion.length==0 || completada.length==0){
        res.status(400).json({
            message: "Todos los campos deben estar completos"
        });
    }
    if(isNaN(id)){
        res.status(400).json({
            message: "El id debe ser un numero"
        });
    }
    const indice = tareas.findIndex((tarea) => tarea.id == id);
    if(indice == -1){
        res.status(400).json({
            message: "Ese id no existe"
        });
    }else{
        tareas[indice] = req.body;
        res.status(200).json({
            message: "Información actualizada correctamente",
            data: tareas[indice]
        });
    }
};

export const patchTareas = (req, res) =>{
    const { id } = req.params;
    const { completada } = req.body;
    if(id.length==0 || completada.length==0){
        res.status(400).json({
            message: "Todos los campos deben estar completos"
        });
    }
    if(isNaN(id)){
        res.status(400).json({
            message: "El id debe ser un numero"
        });
    }
    const indice = tareas.findIndex((tarea) => tarea.id == id);
    if(indice == -1){
        res.status(400).json({
            message: "Ese id no existe"
        });
    }else{
        tareas[indice].completada = completada;
        res.status(200).json({
            message: "Tarea completada",
            data: tareas[indice]
        });
    }
};

export const deleteTareas = (req, res) =>{
    const { id } = req.params;
    const { titulo, descripcion, completada } = req.body;
    if(id.length==0 || titulo.length==0 || descripcion.length==0 || completada.length==0){
        res.status(400).json({
            message: "Todos los campos deben estar completos"
        });
    }
    if(isNaN(id)){
        res.status(400).json({
            message: "El id debe ser un numero"
        });
    }
    const indice = tareas.findIndex((tarea) => tarea.id == id);
    if(indice == -1){
        res.status(400).json({
            message: "Ese id no existe"
        });
    }else{
        const tarea = tareas[indice];
        tareas.splice(indice, 1);
        res.status(200).json({
            message: "Tarea eliminada",
            data: tarea
        });
    }
};