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

export const validarCategoria = [
    body('nombre')
        .notEmpty().withMessage("El titulo no puede estar vacío."),
    body('descripcion')
        .notEmpty().withMessage("La descripción no puede estar vacía."),
    validationErrors
];

export const validarIDCategoria = [
    param("id")
        .notEmpty().withMessage("El id no puede estar vacío."),
    validationErrors
]