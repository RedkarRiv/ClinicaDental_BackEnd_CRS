const { Appointment, User, Treatment, Employee } = require("../../models");
const getAllUsersByEmployeeController = {};

getAllUsersByEmployeeController.getAllPatients = async (req, res) => {
  try {
    const userId = req.userId;
    console.log(`El userId es ${userId}`);

    const employee = await Employee.findOne({
      where: { user_id: userId },
      attributes: ["id"],
    });

    const employeeUserId = employee ? employee.id : null;

    console.log(`El employeeUserId es ${employeeUserId}`);

    const allPatients = await User.findAll({
      include: [
        {
          model: Appointment,
          as: "patient",
          where: { employee_id: employeeUserId },
          attributes: ["appointment_date", "treatment", "comments"],
          include: [
            {
              model: Treatment,
              attributes: ["name", "comments", "price"],
            },
          ],
        },
      ],
      attributes: ["name", "surname", "phone"],
    });

    return res.json({
      success: true,
      message: "Los datos han sido recuperados correctamente",
      data: allPatients,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Los datos no han podido ser recuperados",
      error: error.message,
    });
  }
};
module.exports = getAllUsersByEmployeeController;
