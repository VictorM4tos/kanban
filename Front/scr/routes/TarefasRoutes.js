// responsavel por organizar as rotas do projeto, ou seja conecta a requisição do usuário com metodo do controlles

const express = require("express");
const router = express.Router();

const controllers = require("../controllers/controllers");

console.log(controllers);

router.get("/all", controllers.getAll);
router.post("/create", controllers.create);
router.patch("/update:id", controllers.updateTarefa);

module.exports = router;
