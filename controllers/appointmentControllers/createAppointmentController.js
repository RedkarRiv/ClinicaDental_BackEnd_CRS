const { Appointment } = require("../../models");
const createAppointmentController = {};

createAppointmentController.createAppointment = async (req, res) => {
  try {
    const { employee_id, appointment_date, treatment, comments } = req.body;
    const userId = req.userId;
    const regex =
      /^(?:\d{4}-\d{2}-\d{2}) (?:0[9-9]:[0-5][0-9]|1[0-3]:[0-5][0-9]|15:3[0-9]|16:[0-5][0-9]|17:[0-5][0-9]|18:00)$/;

    if (!userId || !employee_id || !appointment_date) {
      return res.json({
        success: false,
        message:
          "Tienes que introducir el número del paciente, el numero del empleado y la fecha para poder continuar",
      });
    }

    if (!regex.test(appointment_date)) {
      return res.json({
        success: false,
        message: "No puedes crear una cita para esa fecha y esa hora",
      });
    }

    const newAppointment = await Appointment.create({
      user_id: userId,
      employee_id: employee_id,
      appointment_date: appointment_date,
      treatment: treatment,
      comments: comments,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return res.json({
      success: true,
      message: "Cita creada. Gracias por confiar en nuestro equipo",
      date: newAppointment,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "No se ha podido crear la cita",
      error: error.message,
    });
  }
};

module.exports = createAppointmentController;
