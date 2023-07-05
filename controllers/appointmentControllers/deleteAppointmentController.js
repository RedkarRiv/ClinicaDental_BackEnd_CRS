const { Appointment } = require("../../models");
const deleteAppointmentController = {};

deleteAppointmentController.deleteAppointment = async (req, res) => {
  try {
    const userId = req.userId;
    const appointmentID = req.params.appointment_id;

    const appointmentUserId = await Appointment.findOne({
      where: {
        id: appointmentID,
      },
      include: ["patient"],
    });

    if (!appointmentUserId.user_id || appointmentUserId.user_id !== userId) {
      return res.json({
        success: true,
        message: "No puedes editar esta cita",
      });
    }

    const result = await Appointment.destroy({
      where: {
        id: appointmentID,
      },
    });

    return res.json({
      success: true,
      message: "Se ha eliminiado correctamente la cita",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "No se ha podido eliminar la cita",
      error: error.message,
    });
  }
};

module.exports = deleteAppointmentController;
