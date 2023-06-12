const { Appointment, User, Treatment, Employee } = require("../models");
const getAllAppointmentsByEmployeeController = {};

getAllAppointmentsByEmployeeController.getAllAppointments = async (req, res) => {

try {
    const employeeId = req.body.employee_id

    const allAppointments = await Appointment.findAll(
        {
            where: 
            {
                employee_id: employeeId,
            },
            attributes: {
                exclude: ["user_id", "employee_id", "createdAt", "updatedAt"]
            },
            include: [
                {
                attributes: 
                {exclude: ["id", "password", "address", "dni", "birth_date", "role_id", "createdAt", "updatedAt"]},
                model: User,
                as: "patient"
                },
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
module.exports = getAllAppointmentsByEmployeeController;
