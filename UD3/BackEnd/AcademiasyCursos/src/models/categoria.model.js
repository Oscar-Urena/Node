import mongoose from "mongoose";


export const Categoria = mongoose.model('categoria', new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
        maxlength: [100, 'El nombre debe tener como máximo 100 caracteres'],
        trim: true
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
        minlength: [3, 'La descripción debe tener al menos 3 caracteres'],
        maxlength: [500, 'La descripción debe tener como máximo 500 caracteres'],
        trim: true
    }
}, {
    timestamps: false,
    collection: 'categoria',
    versionKey: false
}))