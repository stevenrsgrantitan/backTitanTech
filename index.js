const express = require('express');
const parser = require('body-parser');
const cors = require('cors')

var api = express();
api.use(parser.json(), cors());

const port = 8001;

api.get('/login', (_, res) => {
    res.status(200);

    res.send(data)
});

api.post('/Accounts/Login', (req, res) => {
    console.log(req.body)
    const user = req.body;
    let response;
    if (user.email === 'steven@gmail.com' && user.password === '123456Abc*') {
        response = { msj: 'Bienvenido Steven', code: 200 };
    }
    if (user.email !== 'steven@gmail.com') {
        response = { msj: 'Usuario no existe', code: 404 };
    }
    if (user.email === 'steven@gmail.com' && user.password !== '123456Abc*') {
        response = { msj: 'Contraseña errónea', code: 400 };
    }
    res.status(200);
    res.send(response)
});


api.listen((process.env.PORT || 8001), () => console.log('Servidor escuchando en puerto ' + port));