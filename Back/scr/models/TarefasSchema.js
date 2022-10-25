const mongoose = require("mongoose");

const tarefasSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,

  tarefa: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const tarefas = mongoose.Schema("tarefas", tarefasSchema);

module.exports = tarefas;
