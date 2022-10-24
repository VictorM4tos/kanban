// config inicial
// importar as informação do modulo express para dentro do arquivo app
const express = require("express");
const app = express();
const cors = require("cors");

// ~Deixa disponível as infomações do arquivo app para todo o projeto
module.exports = app;
