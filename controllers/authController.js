const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authController = {};

authController.register = async (req, res) => {
  try {
    if (req.body.password.length < 4) {
      return res.send(
        "La contraseña no puede ser inferior a 4 carácteres. Inténtelo de nuevo."
      );
    }
    const newPassword = bcrypt.hashSync(req.body.password, 8);
    const newUser = await User.create({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: newPassword,
      role_id: 1,
    });
    return res.send(newUser);
  } catch (error) {
    return res.send("No ha sido posible crear la cuenta " + error.message);
  }
};

module.exports = authController

