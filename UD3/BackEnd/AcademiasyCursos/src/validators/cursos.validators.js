import { body, param, validationResult } from 'express-validator';

const validationErrors = (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({
            errors: errores.array()
        });
    }
    next();
};

export const validarCurso = [
    body('titulo')
        .notEmpty().withMessage("El titulo no puede estar vacío."),
    body('descripcion')
        .notEmpty().withMessage("La descripción no puede estar vacía."),
    body('precio')
        .notEmpty().withMessage("El precio no puede estar vacío."),
    validationErrors
];

export const validarIDCruso = [
    param("id")
        .notEmpty().withMessage("El id no puede estar vacío."),
    validationErrors
]