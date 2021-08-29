'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ParqueoSchema = Schema({
    nombre: String,
    descripcion: String,
    direccion: String,
    cantidad_espacios: Number,
});

module.exports + mongoose.model('Parqueo', ParqueoSchema);