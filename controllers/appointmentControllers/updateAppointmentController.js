const { Appointment } = require("../../models");
const updateAppointmentController = {};

updateAppointmentController.updateAppointment = async (req, res) => {

try {
    const appointmentId = req.params.id;

    const appointment = await Appointment.findByPk(appointmentId);

if (!appointment) {
    return res.json(
        {
            success: true,
            message: "La cita no existe"
        }
    )
}

        const appointment_date = req.body.appointment_date
        const treatment = req.body.treatment
        const comments = req.body.comments

        if (!appointment_date) {
            return res.json(
                {
                    success: false,
                    message: "No puedes dejar el campo de fecha en blanco"
                }
            )
        }
        
        const result = await Appointment.update (
            {
                appointment_date : appointment_date,
                treatment : treatment,
                comments : comments
        
            },
            {
                where: {
                    id:appointmentId
                }
            })

            return res.json(
                {
                    success: true,
                    message: "Datos de la cita han sido actualizados",
                    data: result,
                }
            )


} catch (error) {
    return res.status(500).json(
        {
            success: false,
            message: "No se ha podido actualizar los datos de la cita",
            error: error.message
        }
    )
}
}

module.exports = updateAppointmentController