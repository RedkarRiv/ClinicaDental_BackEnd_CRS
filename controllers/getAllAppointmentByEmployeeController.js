const { Appointment } = require("../models");
const getAllAppointmentsByEmployeeController = {};

getAllAppointmentsByEmployeeController.getAllAppointments = async (req, res) => {

try {
    const employeeId = req.body.employee_id

    const allAppointments = await Appointment.findAll(
        {
            where: 
            {
                employee_id: employeeId,
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
module.exports = getAllAppointmentsByEmployeeController;
