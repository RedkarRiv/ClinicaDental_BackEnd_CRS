const { Employee, User } = require("../../models");
const getAllEmployeesController = {};

getAllEmployeesController.getAllEmployees = async (req, res) => {
  try {
    const allEmployees = await Employee.findAll({
        include: [
            {
              model: User,
              attributes: ["name", "surname"],
           },
          ],
    });
   
    return res.json({
      success: true,
      message: "Datos de todos los doctores recuperados",
      data: allEmployees,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Los datos no han podido ser recuperados",
      error: error.message,
    });
  }
};
module.exports = getAllEmployeesController;
