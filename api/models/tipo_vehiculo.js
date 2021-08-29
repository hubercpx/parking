'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Tipo_VehiculoSchema = Schema({
    nombre: String,
    descripcion: String
});

module.exports + mongoose.model('Tipo_Vehiculo', Tipo_vehiculoSchema);