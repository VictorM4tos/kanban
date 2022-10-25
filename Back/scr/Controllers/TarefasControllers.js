// gerenciar a requisição e a resposta
const TarefasSchema = require("../models/TarefasSchema");

const getAll = async (req, res) => {
  TarefasSchema.find(function (err, tarefas) {
    if (err) {
      res.status(500).send({ message: err.message });
    }
    res.status(200).send(tarefas);
  });
};

const createtarefa = async (req, res) => {
  try {
    const newTarefa = new TarefasSchema(req, body);
    console.log("nova tarefa criada", newTarefa);
    const savedTarefa = await newTarefa.save();
    console.log("nova tarefa salva no banco", savedTarefa);

    res.status(201).send({
      message: "novo tarefa criado com sucesso",
      savedTarefa,
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getAll,
  createtarefa,
};

// Aula API
// // demanda:ver todos as tarefas disponiveis
// const getAll = (req, res) => {
//   //   console.log("requisição", req);
//   res.status(200).send(tarefas);
// };

// // Cadastrar novo filme
// const create = (req, res) => {
//   // Requisição
//   const requestedTarefa = req.body.tarefa;

//   // Contruir Objeto para incluir
//   let newTarefa = {
//     id: Math.random().toString(32).substring(2, 6),
//     addedAt: new Date(),
//     tarefa: requestedTarefa,
//   };
//   console.log("nova tarefa", newTarefa);

//   //   Add nova tarefa na lista
//   tarefas.push(newTarefa);
//   res.status(201).send({
//     message: "tarefa add com suceso",
//     newTarefa,
//   });
// };

// // Atualizar um filme
// const updateTarefa = (req, res) => {
//   // requisição
// };
