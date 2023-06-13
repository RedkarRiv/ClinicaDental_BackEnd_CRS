const { Appointment, User, Treatment, Employee} = require("../../models");
const getAllUsersByEmployeeController = {}

getAllUsersByEmployeeController.getAllPatients = async (req, res) => {
try {
    const userId = req.userId;

    const employeeUserId = await User.findOne({
      where: { id: userId },
      include: [
        {
          model: Employee,
        },
      ],
    });

    allPatients = await User.findAll({
          include: [
            {
              model: Appointment,
              as: "patient",
              where: {employee_id: employeeUserId},
              attributes: ["appointment_date", "treatment", "comments"],
              include: [
                {
                  model: Treatment,
                  attributes: ["name", "comments", "price"]
                },
                
              ],
            },
      ],
      attributes: ["name", "surname", "phone"],
    });      
    
    //   include: [
    //     {
    //       model: Appointment,
    //       as: "patient",
    //       include: [
    //         {
    //           model: Employee,
    //           as: "doctor",
    //           where: { id: employeeId },
    //         },
    //       ],
    //     },
    //   ],
    //   attributes: ["name", "surname", "email"],
    // });
    return res.json({
      success: true,
      message: "Los datos han sido recuperados correctamente",
      data: allPatients,
    });

        // allPatients = await User.findAll({
    //     where: {
    //         id: {
    //             [Op.in]: sequelize.literal ( `SELECT DISTINCT "patient" AS "user_id" FROM "Appointment" WHERE "employeeId" = ${employeeId}`)
    //         }
    //     },
    //     attributes: ["name", "surname", "email"],
    // })

    
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Los datos no han podido ser recuperados",
      error: error.message,
    });
  }
};
module.exports = getAllUsersByEmployeeController;
