// server.js arquivo responsável para armazenar as informações do Servidor

const app = require("./scr/app");
console.log("Requisição App: ok");

const PORT = 3030;
app.listen(PORT, () => {
  console.log("Servidor Rodando na ${PORT}");
});
