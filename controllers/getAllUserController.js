const { User } = require("../models");
const getAllUserController = {};

getAllUserController.getAllUsers = async (req, res) => {

try {
    const allUser = await User.findAll();

    return res.json(
        {
            success: true,
            message: "Datos de todos los usuarios recuperados",
            data: allUser
        }
    )

} catch (error) {
    return res.status(500).json(
        {
            success: false,
            message: "Los datos no han podido ser recuperados",
            error: error.message
        }
    )
}
};
module.exports = getAllUserController;
