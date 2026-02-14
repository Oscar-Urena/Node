import { body, param, validationResult } from 'express-validator';


// Middleware reutilizable para manejar errores
const validationErrors = (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({
            errors: errores.array()
        });
    }
    next();
};

export const validar = [
    param('email')
        .notEmpty().withMessage("El email es obligatorio"),
    param('password')
        .notEmpty().withMessage("La contraseña es obligatoria"),
    validationErrors
]

export const validarNombre = [
    param('name')
        .notEmpty().withMessage("El nombre es obligatorio"),
    validationErrors
];

