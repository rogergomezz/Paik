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
    img2: {
        type: String,
        required: true
    },
    img3: {
        type: String,
        required: true
    },
    coche: {
        type: Object,
        required: true
    },
    extras: {
        type: Object,
    },
    precio: {
        type: String,
        required: true
    },
    precioRebajado: {
        type: String,
        required: true
    },
    fechaFabricacion: {
        type: String,
    },
    consumo: {
        type: Object,
        required: true
    },
    contact: {
        type: Object,
    },
})

module.exports = mongoose.model('Coches', cochesSchema)