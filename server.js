var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
const sequelize = require('../database');
const Aluno = require('./models/Aluno')

sequelize.sync()
    .then(() => {  
        console.log('BD Acessado')
    })

app.listen(port);

app.get('/', function(req, res) { res.json({hello: 'world'}); })
console.log('Message RESTful API server started on ' + port);