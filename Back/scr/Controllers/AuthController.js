const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const findUser = req.body.login;
    const userlocalizado = await UserSchema.findById(findUser);
    res.status(201).send({
      message: "Usuário localizado",
      userlocalizado,
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  loginUser,
};
