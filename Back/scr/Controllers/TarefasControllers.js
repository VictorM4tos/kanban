// gerenciar a requisição e a resposta
const app = require("../app");
const tarefasSchema = require("../models/TarefasSchema");

const getAll = async (req, res) => {
  tarefasSchema.find(function (err, tarefas) {
    if (err) {
      res.status(500).send({ message: err.message });
    }
    res.status(200).send(tarefas);
  });
};

const createtarefa = async (req, res) => {
  try {
    const newTarefa = new tarefasSchema(req.body);
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

// Buscar tarefa pelo id
const findID = async (req, res) => {
  try {
    const localizaTarefa = req.params.id;
    const TarefaEncontrada = await tarefasSchema.findById(localizaTarefa);
    res.status(201).send({
      message: "Tarefa encontrado",
      TarefaEncontrada,
    });
  } catch (e) {
    console.error(e);
  }
};

// atualizar filme

const updateTarefa = async (req, res) => {
  try {
    const localizaTarefa = req.params.id;
    const novatarefa = req.body;
    const tarefa = await tarefasSchema.findByIdAndUpdate(
      localizaTarefa,
      novatarefa
    );

    res.status(201).send({
      message: "Tarefa atualizada",
      tarefa,
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getAll,
  createtarefa,
  findID,
  updateTarefa,
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
// const updateTarefa = async (req, res) => {
//   //acessar nome a ser atualizado
//   const requestedTarefa = req.params.tarefa;
//   console.log("Tarefa localizada,", requestedTarefa);
//   //exibir nome da a ser atualizado
//   const requestedNome = req.body.tarefa;
//   console.log("Tarefa a ser atualziada,", requestedNome);

//   // com o nome encontrar o objeto a ser atualizado
//   const tarefa = tarefasSchema.find((n) => n.tarefa == requestedTarefa);
//   console.log("Tarefa Encontrada", tarefa);
// };
