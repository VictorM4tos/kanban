// configurar banco de dados

const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Banco Conectado");
  } catch (error) {
    console.error("erro: ", error.message);
  }
};

module.exports = {
  connect,
};
