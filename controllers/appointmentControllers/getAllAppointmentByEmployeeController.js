const { Appointment, User, Treatment, Employee } = require("../../models");
const getAllAppointmentsByEmployeeController = {};

getAllAppointmentsByEmployeeController.getAllAppointments = async (
  req,
  res
) => {
  try {
    const userId = req.userId;
    const roleId = req.roleId;
    const checkUserIdEmployee = await Employee.findOne({
      where: {
        user_id: userId,
      },
    });

    if (!checkUserIdEmployee && roleId != 3) {
      return res.json({
        success: true,
        message: "No tienes permiso para acceder",
      });
    }

    const allAppointments = await Appointment.findAll({
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
          include: [
            {
              model: User,
              attributes: {
                exclude: [
                  "id",
                  "role_id",
                  "user_id",
                  "profesional_registration_id",
                  "active_status",
                  "password",
                  "phone",
                  "cp",
                  "dni",
                  "avatar_img",
                  "birth_date",
                  "createdAt",
                  "updatedAt",
                ],
              },
            },
          ],
        },
      ],
    });

    return res.json({
      success: true,
      message: "Todas las citas recuperadas",
      data: allAppointments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Los datos no han podido ser recuperados",
      error: error.message,
    });
  }
};
module.exports = getAllAppointmentsByEmployeeController;
