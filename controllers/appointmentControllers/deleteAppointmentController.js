const { Appointment } = require("../../models");
const deleteAppointmentController = {};

deleteAppointmentController.deleteAppointment = async (req, res) => {

    try {
    const appointmentID = req.body.appointment_id

    const result = await Appointment.destroy({
            where: {
                id: appointmentID
            }
        })

    return res.json(
        {
            success: true,
            message: "Se ha eliminiado correctamente la cita",
            data: result
        }
    )

    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No se ha podido eliminar la cita",
                error: error.message
            }
        )
    }
}

module.exports = deleteAppointmentController