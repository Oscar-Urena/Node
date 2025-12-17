"use strict";

import { prueba } from "../data/prueba.js";

export const getPruebas = (req, res) => {
  res.status(200).json({
    data: prueba,
    total: prueba.length
  });
};

export const getPrueba = (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ error: "El id debe ser un número" });
  }

  const item = prueba.find((e) => e.id == id);

  if (!item) {
    return res.status(404).json({ error: `El id: id no ha sido encontrado` });
  }

  res.status(200).json({ data: item });
};

export const addPrueba = (req, res) => {
  const { id, nombre } = req.body;

  if (!id || !nombre || nombre.length === 0) {
    return res.status(400).json({ message: "Los atributos no pueden estar vacíos" });
  }

  if (isNaN(id)) {
    return res.status(400).json({ message: "El id debe ser un número" });
  }

  const existe = prueba.some((e) => e.id == id);
  if (existe) {
    return res.status(400).json({ message: "Ya existe un registro con ese id" });
  }

  prueba.push(req.body);
  res.status(201).json({ message: `El recurso con id id ha sido guardado`, data: req.body });
};

export const updatePrueba  = (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ error: "El id debe ser un número" });
  }

  const { nombre } = req.body;
  if (!nombre || nombre.length === 0) {
    return res.status(400).json({ message: "Los atributos no pueden estar vacíos" });
  }

  const indice = prueba.findIndex((e) => e.id == id);

  if (indice === -1) {
    return res.status(404).json({ error: `No se encontró el id: id para actualizar` });
  }

  prueba[indice] = { ...prueba[indice], ...req.body };

  res.status(200).json({
    message: `El recurso con id id ha sido actualizado`,
    data: prueba[indice]
  });
};

export const deletePrueba  = (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ error: "El id debe ser un número" });
  }

  const indice = prueba.findIndex((e) => e.id == id);

  if (indice === -1) {
    return res.status(404).json({ error: `El id: id no ha sido encontrado` });
  }

  const eliminado = prueba.splice(indice, 1);

  res.status(200).json({
    message: `El recurso con el id id ha sido eliminado`,
    deleted: eliminado[0]
  });
};