// responsavel por organizar as rotas do projeto, ou seja conecta a requisição do usuário com metodo do controlles

const express = require("express");
const router = express.Router();

const controllers = require("../Controllers/TarefasControllers");

// console.log(controllers);

router.get("/all", controllers.getAll);
router.get("/:id", controllers.findID);
router.post("/create", controllers.createtarefa);
router.patch("/:id", controllers.updateTarefa);
router.delete("/:id", controllers.deleteTarefa);

module.exports = router;
