import mongoose from "mongoose";

export const Academia  = mongoose.Model('academia', new mongoose.Schema({
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
    curso:{
        type: [cursosAcademia],
        default: []
    }
}))

const cursosAcademia = mongoose.Model(new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
        maxlength: [100, 'El nombre debe tener como máximo 100 caracteres'],
        trim: true
    },
    precio: {
        type: Integer,
        required: [true, 'La dirección es obligatoria'],
        minlength: [3, 'La dirección debe tener al menos 3 caracteres'],
        maxlength: [500, 'La dirección debe tener como máximo 500 caracteres'],
        trim: true
    },
}))