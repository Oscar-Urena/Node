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



const tipos_inmueble_validos = ['piso', 'chalet', 'casa', 'adosado', 'duplex', 'ático', 'atico', 'estudio', 'loft'];




export const validarInmueble = [
    body('zona')
        .notEmpty().withMessage('La zona no puede estar vacía')
        .isInt({ min: 1 }).withMessage('La zona debe ser un número ')
        .toInt(),
    body('tipo_inmueble')
        .notEmpty().withMessage('El tipo de inmueble no deb estár vacío')
        .trim()
        .customSanitizer(value => {
            return value.toLowerCase();
        })
        .isIn(tipos_inmueble_validos).withMessage(`No válido, el tipo de inmueble debe ser uno de estos: ${tipos_inmueble_validos}`),
    body('domicilio')
        .notEmpty().withMessage('El domicilio no puede estar vacío')
        .trim()
        .isLength({ min: 10, max: 100 }).withMessage('El domicilio debe tener entre 10 y 100 caracteres')
        .matches(/^[a-zA-Z0-9áéíóú\s,.\-]+$/i).withMessage('El domicilio solo puede contener letras, números, espacios, comas, puntos y guiones')
        .customSanitizer(value => {
            return value.replace(/\s+/g, ' ');
        }),
    body('habitaciones')
        .notEmpty().withMessage('Las habitaciones no pueden estar vacías')
        .isInt({ min: 1, max: 20 }).withMessage('Las habitaciones deben ser un número entre 1 y 20')
        .toInt(),
    body('banos')
        .notEmpty().withMessage('Los baños no pueden estar vacíos')
        .isInt({ min: 1, max: 10 }).withMessage('Los baños deben ser un número entre 1 y 10')
        .toInt(),
    body('metros_cuadrados')
        .notEmpty().withMessage('Los metros cuadrados no pueden estar vacíos')
        .isFloat({ min: 0.01, max: 9999.99 }).withMessage('Los metros cuadrados deben ser un número decimal positivo (máximo 9999.99)')
        .custom(value => {
            const decimales = value.toString().split('.')[1];
            if (decimales && decimales.length > 2) {
                throw new Error('Los metros cuadrados deben tener máximo 2 decimales');
            }
            return true;
        })
        .toFloat(),
    body('precio')
        .notEmpty().withMessage('El precio no puede estar vacío')
        .isFloat({ min: 0.01, max: 99999999.99 }).withMessage('El precio debe ser un número decimal positivo (máximo 99,999,999.99)')
        .custom(value => {
            const decimales = value.toString().split('.')[1];
            if (decimales && decimales.length > 2) {
                throw new Error('El precio debe tener máximo 2 decimales');
            }
            return true;
        })
        .toFloat(),
    body('reservado')
        .optional()
        .isIn([0, 1, '0', '1']).withMessage('El campo reservado debe ser 0 o 1')
        .toInt()
]

