var mongodb = require('./db')
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var user = new Schema({
    'name': String,
    'password': String,
    'email': String
})

module.exports = mongoose.model('user', user)