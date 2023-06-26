const { User } = require("../../models");
const bcrypt = require("bcrypt");
const updateUserController = {};
const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{4,}$/;

updateUserController.updateUser = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.json({
        success: true,
        message: "El usuario no existe",
      });
    }

    const name = req.body.name;
    const surname = req.body.surname;
    const dni = req.body.dni;
    const cp = req.body.cp;
    const birth_date = req.body.birth_date;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    const avatar = req.body.avatar;


    if (!password || !email || !name) {
      return res.json({
        success: false,
        message:
          "No puedes dejar los campos de name, password y email en blanco",
      });
    }
  
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
    const newPassword = bcrypt.hashSync(password, 10);

    const result = await User.update(
      {
        name: name,
        surname: surname,
        dni: dni,
        cp: cp,
        birth_date: birth_date,
        phone: phone,
        email: email,
        password: newPassword,
        avatar_img: avatar
      },
      {
        where: {
          id: userId,
        },
      }
    );

    return res.json({
      success: true,
      message: "Datos del usuario actualizados",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "No se ha podido actualizar los datos del usuario",
      error: error.message,
    });
  }
};

module.exports = updateUserController;
