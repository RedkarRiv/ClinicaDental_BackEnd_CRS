const { Treatment } = require("../../models");
const getAllTreatmentsController = {};

getAllTreatmentsController.getAllTreatments = async (req, res) => {
  try {
    const allTreatments = await Treatment.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
   
    return res.json({
      success: true,
      message: "Datos de todos los doctores recuperados",
      data: allTreatments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Los datos no han podido ser recuperados",
      error: error.message,
    });
  }
};
module.exports = getAllTreatmentsController;
