import { body, param, query, validationResult } from "express-validator";

export const manejarErroresValidacion = (req, res, next) => {
  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    return res.status(400).json({
      success: false,
      errores: errores.array()
    });
  }
  next();
};


export const validarReserva = [
  body("dni")
    .notEmpty().withMessage("El DNI no puede estar vacío")
    .trim()
    .customSanitizer(value => value.toUpperCase())
    .matches(/^[0-9]{8}[A-Z]$/)
    .withMessage("El DNI no tiene un formato válido"),

  body("idInmueble")
    .notEmpty().withMessage("El ID del Inmueble no puede estar vacío")
    .isInt({ min: 1 }).withMessage("Debe ser un número entero positivo")
    .toInt()
];

export const validarBusqueda = [
  query("zona")
    .notEmpty().withMessage("La zona es obligatoria")
    .isInt({ min: 1 }).withMessage("La zona debe ser un número positivo")
    .toInt(),

  query("precioMin")
    .notEmpty().withMessage("precioMin es obligatorio")
    .isFloat({ min: 0 }).withMessage("precioMin debe ser positivo o cero")
    .custom(value => /^\d+(\.\d{1,2})?$/.test(value))
    .withMessage("precioMin solo puede tener hasta 2 decimales")
    .toFloat(),

  query("precioMax")
    .notEmpty().withMessage("precioMax es obligatorio")
    .isFloat({ min: 0 }).withMessage("precioMax debe ser positivo o cero")
    .custom(value => /^\d+(\.\d{1,2})?$/.test(value))
    .withMessage("precioMax solo puede tener hasta 2 decimales")
    .toFloat()
];


export const validarIds = [
  param("idZona")
    .notEmpty().withMessage("idZona es obligatorio")
    .isInt({ min: 1 }).withMessage("idZona debe ser un entero positivo")
    .toInt(),

  param("idInmueble")
    .notEmpty().withMessage("idInmueble es obligatorio")
    .isInt({ min: 1 }).withMessage("idInmueble debe ser un entero positivo")
    .toInt(),

  param("idReserva")
    .notEmpty().withMessage("idReserva es obligatorio")
    .isInt({ min: 1 }).withMessage("idReserva debe ser un entero positivo")
    .toInt()
];


