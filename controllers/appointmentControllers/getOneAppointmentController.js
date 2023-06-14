const { Appointment, User, Treatment, Employee } = require("../../models");
const getOneAppointmentController = {};

getOneAppointmentController.getOneAppointment = async (req, res) => {
  try {
    findOneAppointment = await Appointment.findOne({
      where: {
        id: req.params.id,
      },
      attributes: {
        exclude: ["user_id", "employee_id", "createdAt", "updatedAt"],
      },
      include: [
        {
          attributes: {
            exclude: [
              "id",
              "password",
              "address",
              "dni",
              "birth_date",
              "role_id",
              "createdAt",
              "updatedAt",
            ],
          },
          model: User,
          as: "patient",
        },
        {
          attributes: { exclude: ["id", "createdAt", "updatedAt"] },
          model: Treatment,
        },
        {
          attributes: {
            exclude: [
              "role_id",
              "user_id",
              "profesional_registration_id",
              "active_status",
              "createdAt",
              "updatedAt",
            ],
          },
          model: Employee,
          as: "doctor",
        },
      ],
    });
    return res.json({
      success: true,
      message: "Datos de la cita recuperados",
      data: findOneAppointment,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "No se han podido recuperar los datos de la cita",
      error: error.message,
    });
  }
};

module.exports = getOneAppointmentController;
