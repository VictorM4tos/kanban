// gerenciar a requisição e a resposta
const tarefas = require("../models/tarefas.json");

// demanda:ver todos as tarefas disponiveis
const getAll = (req, res) => {
  //   console.log("requisição", req);
  res.status(200).send(tarefas);
};

// Cadastrar novo filme
const create = (req, res) => {
  // Requisição
  const requestedTarefa = req.body.tarefa;

  // Contruir Objeto para incluir
  let newTarefa = {
    id: Math.random().toString(32).substring(2, 6),
    addedAt: new Date(),
    tarefa: requestedTarefa,
  };
  console.log("nova tarefa", newTarefa);

  //   Add nova tarefa na lista
  tarefas.push(newTarefa);
  res.status(201).send({
    message: "tarefa add com suceso",
    newTarefa,
  });
};

// Atualizar um filme
const updateTarefa = (req, res) => {
  // requisição
};

module.exports = {
  getAll,
  create,
  updateTarefa,
};
