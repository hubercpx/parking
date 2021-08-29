'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoleSchema = Schema({
    nombre: String,
    descripcion: String,
});

module.exports + mongoose.model('Role', RoleSchema);