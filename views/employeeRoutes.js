const router = require("express").Router();
const auth = require("../middlewares/tokenVerify");
const isAdmin = require("../middlewares/isAdmin");
const deleteEmployeeController = require("../controllers/employeeControllers/deleteEmployeeController");
const getAllEmployeesController = require("../controllers/employeeControllers/getAllEmployeesController");
const getAllTreatmentsController = require("../controllers/employeeControllers/getAllTreatmentsController");
const cors = require('cors');


router.use(cors());


router.delete("/delete/:id", auth, isAdmin, deleteEmployeeController.deleteEmployee); //PTE ELIMINAR CAMPOS DE USER.
router.get("/all", getAllEmployeesController.getAllEmployees); //PTE ELIMINAR CAMPOS DE USER.
router.get("/treatments", getAllTreatmentsController.getAllTreatments); //PTE ELIMINAR CAMPOS DE USER.

module.exports = router;
