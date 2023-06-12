const { Appointment, User, Employee, Treatment } = require("../models");
const getAllAppointmentsByUserController = {};

getAllAppointmentsByUserController.getAllAppointments = async (req, res) => {

try {
    const userId = req.userId

    const allAppointments = await Appointment.findAll(
        {
            where: 
            {
                user_id: userId,
            },            
            attributes: {
                exclude: ["user_id", "employee_id", "createdAt", "updatedAt"]
            },
            include: [
                    {
                attributes: 
                {exclude: ["id","createdAt", "updatedAt"]},
                model: Treatment,
                },
                {
                attributes: 
                {exclude: ["role_id", "user_id", "profesional_registration_id", "active_status", "createdAt", "updatedAt"]},
                model: Employee,
                as: "doctor"
                }
            ]
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
