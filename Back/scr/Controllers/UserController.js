const app = require("../app");
const UserSchema = require("../models/userSchema");

// consultar todos usuário
const getAll = async (req, res) => {
  UserSchema.find({
    function(err, users) {
      if (err) {
        res.status(500).semd({
          message: err.message,
        });
      }
      res.status(200).send(users);
    },
  });
};

// criar usuário
const createusers = async (req, res) => {
  try {
    const newuser = new UserSchema(req.body);
    const savedUser = await newuser.save();
    res.status(201).send({
      message: "usuário cadastro com sucesso",
      savedUser,
    });
  } catch (e) {
    console.error(e);
  }
};

const findId = async (req, res) => {
  try {
    const findUser = req.params.id;
    const nameuser = await UserSchema.findById(findUser);
    res.status(201).send({
      message: "Usuário localizado",
      nameuser,
    });
  } catch (e) {
    console.error(e);
  }
};

const updateUser = async (req, res) => {
  try {
    const finduser = req.params.id;
    const updateuser = req.params.body;
    const modifieduser = await UserSchema.findByIdAndUpdate(
      finduser,
      updateuser
    );
    res.status(201).send({
      message: "usuário atualizado",
      modifieduser,
    });
  } catch (e) {
    console.error(e);
  }
};

const deleteUser = async (req, res) => {
  try {
    const finduser = req.params.id;
    const nameuser = await UserSchema.findOneAndDelete(finduser);
    res.status(201).send({
      message: "usuário deletado",
      nameuser,
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getAll,
  createusers,
  findId,
  updateUser,
  deleteUser,
};
