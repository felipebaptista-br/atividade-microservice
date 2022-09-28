'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    idCategoria :{
        type: String, 
        required:true, 
        default:null
    },
    categoria :{
        type: String, 
        required:true, 
        default:null
    }
});

module.exports = mongoose.model('Produto',schema );