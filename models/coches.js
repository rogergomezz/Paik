const mongoose = require('mongoose')

const cochesSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true,
    },
    modelo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: false,
    },
    img: {
        type: String,
        required: true
    },
    coche: {
        type: Object,
        required: true
    },
    extras: {
        type: Object,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    fechaFabricacion: {
        type: String,
        required: true
    },
    consumo: {
        type: Object,
        required: true
    },
    contact: {
        type: Object,
        required: true
    },
})

module.exports = mongoose.model('Coches', cochesSchema)