const express = require('express'); //node reconhece o requerimento pelo express
const route = require('./route');
const path = require('path'); //módulo

const server = express(); //criando e guardando a execução do express em um server

server.set('view engine', 'ejs'); //estamos falando que o ejs vai ser responsável pelo view engine

server.use(express.static("public")); //fazendo o servidor usar o express pra identificar a pasta public com o conteúdo

server.set('views', path.join(__dirname, 'views'));

server.use(express.urlencoded({extended: true})); //middleware

server.use(route);

server.listen(3000, () => console.log("RODANDO")); //escolhendo uma porta pra iniciar o servidor