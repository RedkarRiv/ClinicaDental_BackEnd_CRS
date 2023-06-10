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

authController.login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.json({
        success: true,
        message: "Usuario incorrecto",
      });
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.json({
        success: true,
        message: "Contraseña incorrecta",
      });
    }

    const token = jwt.sign(
      {
        userId: user.id,
        roleId: user.role_id,
        email: user.email,
      },
      "kilombo",
      {
        expiresIn: "2h",
      }
    );

    return res.json({
      success: true,
      message: "Usuario logeado",
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "El usuario no ha podido logearse",
      error: error.menssage,
    });
  }
};

module.exports = authController;
