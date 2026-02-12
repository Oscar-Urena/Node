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

export const validarAcademia = [
    body('nombre')
        .notEmpty().withMessage("El titulo no puede estar vacío."),
    body('direccion')
        .notEmpty().withMessage("La direccion no puede estar vacía."),
    body('cursos')
        .notEmpty().withMessage("El curso no puede estar vacío."),    
    validationErrors
];

export const validarIDAcademia = [
    param("_id")
        .notEmpty().withMessage("El id no puede estar vacío."),
    validationErrors
]