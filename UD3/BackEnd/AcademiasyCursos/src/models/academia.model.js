import mongoose from "mongoose";

const cursosAcademiaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
        maxlength: [100, 'El nombre debe tener como máximo 100 caracteres'],
        trim: true
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
        min: [0, 'El precio no puede ser negativo']
    }
}, {_id:false});

const academiaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
        maxlength: [100, 'El nombre debe tener como máximo 100 caracteres'],
        trim: true
    },
    direccion: {
        type: String,
        required: [true, 'La dirección es obligatoria'],
        minlength: [3, 'La dirección debe tener al menos 3 caracteres'],
        maxlength: [500, 'La dirección debe tener como máximo 500 caracteres'],
        trim: true
    },
    curso: {
        type: [cursosAcademiaSchema],
        default: []
    }
});

export const Academia = mongoose.model('Academia', academiaSchema);
