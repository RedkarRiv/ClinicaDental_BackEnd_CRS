const { Op } = require("sequelize");
const { Appointment, User, Employee, Treatment } = require("../../models");

const searchAppointmentController = {};

searchAppointmentController.searchAppointment = async (req, res) => {
  try {
    const userId = req.userId
    const searchDate = req.body.date;
    console.log("------------------")
    console.log(searchDate)
    const appointments = await Appointment.findAll({
      where: {
        appointment_date: {
          [Op.substring]: `%${searchDate}%`,
        },
        user_id:userId
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

    
    if (appointments.length === 0) {
      return res.json({ message: "No existen citas" });
    }
    
    res.json({ message: "Citas encontradas", data: appointments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al recuperar las citas" });
  }
};

module.exports = searchAppointmentController;