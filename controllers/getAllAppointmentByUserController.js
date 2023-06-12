const { Appointment } = require("../models");
const getAllAppointmentsByUserController = {};

getAllAppointmentsByUserController.getAllAppointments = async (req, res) => {

try {
    const userId = req.userId
    console.log('-----------------------------------');
    console.log(userId)
    console.log('-----------------------------------');

    const allAppointments = await Appointment.findAll(
        {
            where: 
            {
                user_id: userId,
            }
        }
    );


    return res.json(
        {
            success: true,
            message: "Todas las citas recuperadas",
            data: allAppointments
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
module.exports = getAllAppointmentsByUserController;
