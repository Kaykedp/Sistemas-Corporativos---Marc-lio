var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
const sequelize = require('./database');
const Aluno = require('./models/alunoModel')

sequelize.sync()
    .then(() => {  
        console.log('BD Acessado')
    })
    .catch(err => {
        console.error('Falha ao conectar com o BD', err);
    });

app.listen(port);

app.get('/', function(req, res) { res.json({hello: 'world'}); })
console.log('Message RESTful API server started on ' + port);