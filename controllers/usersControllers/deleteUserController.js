const { User } = require("../../models");

const deleteUserController = {};

deleteUserController.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deleteUser = await User.destroy({
      where: {
        id: userId,
      },
    });
    return res.json({
      success: true,
      message: "El usuario ha sido eliminado",
      data: deleteUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "El usuario no ha podido ser eliminado",
      error: error.message,
    });
  }
};

module.exports = deleteUserController;
