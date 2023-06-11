const { Appointment } = require("../models");
const createAppointmentController = {};


createAppointmentController.createAppointment = async (req, res) => {

try {
    
const {user_id, employee_id, appointment_date, treatment, comments}= req.body;

if (!user_id || !employee_id || !appointment_date) {
    return res.json(
        {
            success: false,
            message: "Tienes que introducir el número del paciente, el numero del empleado y la fecha para poder continuar"
        }
    )
}

const newAppointment = await Appointment.create(
    {
        user_id : user_id,
        employee_id: employee_id,
        appointment_date: appointment_date,
        treatment: treatment,
        comments: comments,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
)
return res.json(
    {
        success: true,
        message: "Cita creada. Gracias por confiar en nuestro equipo",
        date: newAppointment
    }
)
} catch (error) {
    return res.status(500).json(
        {
            success: false,
            message: "No se ha podido crear la cita",
            error: error.message
        }
    )
}

}

module.exports = createAppointmentController