// responsavel por organizar as rotas do projeto, ou seja conecta a requisição do usuário com metodo do controlles

const express = require("express");
const router = express.Router();

const UserController = require("../Controllers/UserController");
// console.log(controllers);

// Routes UserController
router.get("/all", UserController.getAll);
router.get("/:id", UserController.findId);
router.post("/create", UserController.createusers);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
