// Add this to the VERY top of the first file loaded in your app
const apm = require('elastic-apm-node').start({
    // Override service name from package.json
    // Allowed characters: a-z, A-Z, 0-9, -, _, and space
    serviceName: 'apm-express',

    // Use if APM Server requires a token
    secretToken: '',

    // Use if APM Server uses API keys for authentication
    apiKey: '',

    // Set custom APM Server URL (default: http://localhost:8200)
    serverUrl: '',
})

const app = require('express')()

var err = new Error('Ups, something broke!')

apm.captureError(err)

/*const express = require('express');

const app = express();*/

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