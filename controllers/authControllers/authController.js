const { User } = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authController = {};

authController.register = async (req, res) => {
  try {
  const name = req.body.name;
  const surname = req.body.surname
  const email = req.body.email;
  const password = req.body.password;
  const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{4,}$/;

  if (!checkEmail.test(req.body.email)) {
    return res.status(400).json({
      success: false,
      message: "El correo no es valido",
    });
  }

  if (!regex.test(req.body.password)) {
    return res.json(
      {
        success: true,
        message: "La contraseña debe tener una mayuscula, una minuscula y un número. Su longitud nunca puede ser inferior a 4."
      }
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
    return res.json(
      {
        success: false,
        message: "No ha sido posible crear la cuenta",
        error: error.message
      }
      );
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
      return res.status(501).json({
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
