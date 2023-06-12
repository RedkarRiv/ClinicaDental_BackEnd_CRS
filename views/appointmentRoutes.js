const router = require("express").Router();
const auth = require("../middlewares/tokenVerify");
const isEmployee = require("../middlewares/isEmployee");
const createAppointmentController = require("../controllers/createAppointmentController");
const deleteAppointmentController = require("../controllers/deleteAppointmentController");
const getOneAppointmentController = require("../controllers/getOneAppointmentController");
const updateAppointmentController = require("../controllers/updateAppointmentController")
const getAllAppointmentsByUserController = require("../controllers/getAllAppointmentByUserController");
const getAllAppointmentsByEmployeeController = require("../controllers/getAllAppointmentByEmployeeController");

router.post("/new", auth, createAppointmentController.createAppointment)
router.delete("/:id", auth, deleteAppointmentController.deleteAppointment)
router.get("/cita/:id", auth, getOneAppointmentController.getOneAppointment)
router.put("/update/:id", auth, updateAppointmentController.updateAppointment)
router.get("/all", auth, getAllAppointmentsByUserController.getAllAppointments)
router.post("/list", auth, isEmployee, getAllAppointmentsByEmployeeController.getAllAppointments)


module.exports = router;