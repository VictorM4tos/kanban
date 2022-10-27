const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const { email} = req.body;
  try {
    const findUser = await UserSchema.findById(email);
    // const validPassword = await bcrypt.compare(senha, userSchema.senha);
    res.status(201).send({
      message: "Usuário localizado",
      email: `${req.body.email}`,
    });
  } catch (e) {
    console.error(
        "Usuário Não localizado",message
      })
    );
  }
};

module.exports = {
  loginUser,
};
