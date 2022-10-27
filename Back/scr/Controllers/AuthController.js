const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  try {
    const findUser = await UserSchema.findById(req.body.email);
    const validPassword = bcrypt.compareSync(req.body.senha, user.password);
    res.status(201).send({
      message: "Usuário localizado",
      email: `${req.body.email}`,
    });
  } catch (e) {
    console.log(
      res.status(401).send({
        message: "Usuário Não localizado",
        email: `${req.body.email}`,
      })
    );
  }
};

module.exports = {
  loginUser,
};
