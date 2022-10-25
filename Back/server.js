// server.js arquivo responsável para armazenar as informações do Servidor

const app = require("./scr/app");
console.log("Requisição App: ok");

const PORT = process.env.PORT;
// console.log("variaveis de ambiente", process.env); - Exibir se as variaveis de ambiente
app.listen(PORT, () => {
  console.log(`Servidor Rodando na ${PORT}`);
});
