const { User } = require("../../models");
const bcrypt = require("bcrypt");
const updateUserController = {};

updateUserController.updateUser = async (req, res) => {

try {
    const userId = req.userId;

    const user = await User.findByPk(userId);
if (!user) {
    return res.json(
        {
            success: true,
            message: "El usuario no existe"
        }
    )
}

        const name = req.body.name
        const surname = req.body.surname
        const dni = req.body.dni
        const address = req.body.address
        const birth_date = req.body.birth_date
        const phone = req.body.phone
        const email = req.body.email
        const password = req.body.password

        if (!password|| !email || !name) {
            return res.json(
                {
                    success: false,
                    message: "No puedes dejar los campos de name, password y email en blanco"
                }
            )
        }
        if (password.length < 4) {
            return res.json(
                { 
                    success: false,
                    message:"La contraseña debe tener al menos 4 carácteres. Inténtelo de nuevo"
                }
                )
        }

        const newPassword = bcrypt.hashSync(password, 10);

        const result = await User.update (
            {
            name : name,
            surname : surname,
            dni : dni,
            address : address,
            birth_date : birth_date,
            phone : phone,
            email : email,
            password: newPassword
            },
            {
                where: {
                    id:userId
                }
            })

            return res.json(
                {
                    success: true,
                    message: "Datos del usuario actualizados",
                    data: result,
                }
            )


} catch (error) {
    return res.status(500).json(
        {
            success: false,
            message: "No se ha podido actualizar los datos del usuario",
            error: error.message
        }
    )
}
}

module.exports = updateUserController