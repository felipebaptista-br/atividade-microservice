const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://brunofigueiredo11:SjfzJkYtUyC0Q1UK@api-catalogo.nbdseyv.mongodb.net/Corporation");

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(function (req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token' )
    next();
});

//registrar a model
require('./models/categoria');
require('./models/produto');

//registrar a roda
const categRouter = require('./routes/categoria-route');
const produtoRouter = require('./routes/produto-route');
const index = require('./routes/index')

app.use('/', index);
app.use('/categoria', categRouter);
app.use('/produto', produtoRouter);

module.exports = app


