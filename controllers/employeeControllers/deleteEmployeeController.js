const { Employee } = require("../../models");
const deleteEmployeeController = {};

deleteEmployeeController.deleteEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;
    const deleteEmployee = await Employee.destroy({
      where: {
        id: employeeId,
      },
    });
    return res.json({
      success: true,
      message: "El empleado ha sido eliminado",
      data: deleteEmployee,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "El empleado no ha podido ser eliminado",
      error: error.message,
    });
  }
};

module.exports = deleteEmployeeController;
