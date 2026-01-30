import { body, validationResult } from "express-validator";


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

export const validarZona = [
    body('descripcion'
        .notEmpty().withMessage('La descrición no puede estar vacío.')
        .isLength({min: 3, max: 50}).withMessage('La descripción debe estár entre entre 3 y 50 caracteres')
        .trim()
        .matches(/^[a-zA-Z\s]+$/)
        .customSanitizer(value =>{
            return value.replace(/\s+/g, ' ');
        })
    )
]