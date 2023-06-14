const { User } = require("../../models");
const getOneUserController = {};

getOneUserController.getOneUser = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findByPk(userId, {
      attributes: { exclude: ["password", "role_id"] },
    });
    return res.json({
      success: true,
      message: "Datos del usuario recuperados",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "No se han podido recuperar los datos del usuario",
      error: error.message,
    });
  }
};

module.exports = getOneUserController;
