"use strict";

import { json } from "express";
import { usuarios } from "../data/usuarios.js";

export const getUsuarios = (req, res) => {
  res.status(200).json({
    data: usuarios,
    total: usuarios.length,
  });
};

export const getUsuario = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  if (isNaN(id)) {
    res.status(400).json({
      message: "El id debe ser numérico",
    });
  } else {
    const indice = usuarios.findIndex((usuario) => usuario.id == id);
    if (indice == -1) {
      res.status(400).json({
        message: "El id no existe",
      });
    } else {
      res.status(200).json({
        data: usuarios.at(indice),
      });
    }

  }
};

export const addUsuarios = (req, res) => {
  console.log(req.body);
  const { id, nombre, email, edad } = req.body;
  if (
    id.length == 0 ||
    nombre.length == 0 ||
    email.length == 0 ||
    edad.length == 0
  ) {
    res.status(400).json({
      message: "",
    });
  }
  if (isNaN(id)) {
    res.status(400).json({
      message: "El id debe ser numérico",
    });
  }
  usuarios.push(req.body);
  res.status(201).json({
    message: `El usuario ${id}se ha añadido correctamente`,
  });
};

export const updateUsuario = (req, res) => {
  const { id } = req.params;
  const { nombre, email, edad } = req.body;
  if (id.length == 0 || nombre.length == 0 || email.length == 0 || edad.length == 0) {
    return res.status(400).json({
      message: "Debes rellenar todos los parametros necesarios"
    })
  }
  if (isNaN(id)) {
    return res.status(400).json({
      message: "El id debe ser numerico"
    })
  }
  const existeId = usuarios.findIndex(usr => usr.id == id);
  if (existeId == -1) {
    return res.status(400).json({
      message: "La id no existe"
    });
  }
  else {
    // Como el body del request ya tiene la estructura mandamos eso al array
    // usuarios[existeId]=req.body // En caso de pasar el id dentro del body esto estaria bien
    usuarios[existeId] = {
      id, nombre, email, edad
    }
    return res.status(201).json({
      message: `El usuario con id ${id} ha sido modificado`,
      data: usuarios[existeId]
    });
  }
};

export const patchUsuarios = (req, res) => {
  const { id } = req.params;
  const { email }= req.body;
  if (id.length == 0 || email.length == 0) {
    return res.status(400).json({
      message: "Debes rellenar todos los parametros necesarios"
    })
  }
  if (isNaN(id)) {
    return res.status(400).json({
      message: "El id debe ser numerico"
    })
  }
  const existeId = usuarios.findIndex(usr => usr.id == id);
  if (existeId == -1) {
    return res.status(400).json({
      message: "La id no existe"
    });
  }
  else {
    usuarios[existeId].email = email;
    }
    return res.status(201).json({
      message: `El usuario con id ${id} ha sido modificado`,
      data: usuarios[existeId]
    });
};

export const deleteUsuario = (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    res.status(400).json({
      message: "El id debe ser numérico",
    });
  } else {
    const indice = usuarios.findIndex((usuario) => usuario.id == id);
    if (indice == -1) {
      res.status(400).json({
        message: "El id no existe",
      });
    } else {
      usuarios.splice(indice, 1)
      res.status(200).json({
        message: `El usuario ha sido eliminado`
      })
    }
  }
};
