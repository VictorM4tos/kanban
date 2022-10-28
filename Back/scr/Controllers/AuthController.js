const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  try {
    const finduser = { email: req.body.email };
    const Usuarioencontrado = await UserSchema.findOne(finduser);
    // res.status(201).send({
    //   message: "usuário autenticado",
    //   Usuarioencontrado,
    // });
    if (!Usuarioencontrado) {
      return res.status(401).send({
        message: "e-mail não localizado",
      });
    }
    const senhaconfir = bcrypt.compareSync(
      req.body.senha,
      Usuarioencontrado.senha
    );
    // res.status(201).send({
    //   message: "usuário autenticado",
    //   senhaconfir,
    // });
    if (!senhaconfir) {
      return res.status(401).send({
        message: "e-mail não localizado",
      });
    }
  } catch (e) {
    console.error(e);
  }
};

// const token = jwt.sign({ name: user.name }, SECRET);
// res.status(200).send({
//   message: "Login autorizado",
//   token,
// });

module.exports = {
  loginUser,
};
