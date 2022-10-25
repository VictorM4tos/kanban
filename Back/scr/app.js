// config inicial
// importar as informação do modulo express para dentro do arquivo app
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

// Define a rota princial do projeto
const TarefasRoutes = require("../scr/routes/TarefasRoutes");
app.use("/tarefas", TarefasRoutes);

// ~Deixa disponível as infomações do arquivo app para todo o projeto
module.exports = app;
