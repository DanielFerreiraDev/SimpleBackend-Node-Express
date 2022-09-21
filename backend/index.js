const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('Bem-vindo!')
});

app.get('/cadastro-clientes', function (req, res) {
    res.send('Cadastrar Clientes')
});

app.get('/servico', function (req, res) {
    res.send('Lista de Serviços')
});

app.listen(3000);