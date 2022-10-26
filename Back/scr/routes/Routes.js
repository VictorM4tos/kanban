// responsavel por organizar as rotas do projeto, ou seja conecta a requisição do usuário com metodo do controlles

const express = require("express");
const router = express.Router();

const tarefascontrollers = require("../Controllers/TarefasControllers");
const UserController = require("../Controllers/UserController");
// console.log(controllers);

// Router TarefasControllers
router.get("/all", tarefascontrollers.getAll);
router.get("/:id", tarefascontrollers.findID);
router.post("/create", tarefascontrollers.createtarefa);
router.patch("/:id", tarefascontrollers.updateTarefa);
router.delete("/:id", tarefascontrollers.deleteTarefa);

// Routes UserController
router.get("/all", UserController.getAll);
router.get("/:id", UserController.findId);
router.post("/create", UserController.createusers);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
