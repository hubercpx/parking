'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    nombre: String,
    apellido: String,
    nick: String,
    email: String,
    password: String,
    role: {type: Schema.ObjectId, ref: 'Role'},
    parqueo: {type: Schema.ObjectId, ref: 'Parqueo'},
    image: String
});

module.exports + mongoose.model('User', UserSchema);