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

module.exports = mongoose.model("tarefa", tarefasSchema);
