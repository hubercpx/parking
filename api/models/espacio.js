'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EspacioSchema = Schema({
    nombre: String,
    tipo_vehiculo: {type: Schema.ObjectId, ref: 'Tipo_Vehiculo'}
});
module.exports + mongoose.model('User', EspacioSchema);