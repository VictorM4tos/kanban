// gerenciar a requisição e a resposta

// demanda:ver todos as tarefas disponiveis

const getAll = (req, res) => {
  console.log("requisição", req);

  res.send({
    message: "bateu na rota",
  });
};

module.exports = {
  getAll,
};
