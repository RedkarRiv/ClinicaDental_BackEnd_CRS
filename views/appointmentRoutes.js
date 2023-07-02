const router = require("express").Router();
const auth = require("../middlewares/tokenVerify");
const isEmployee = require("../middlewares/isEmployee");
const createAppointmentController = require("../controllers/appointmentControllers/createAppointmentController");
const deleteAppointmentController = require("../controllers/appointmentControllers/deleteAppointmentController");
const getOneAppointmentController = require("../controllers/appointmentControllers/getOneAppointmentController");
const updateAppointmentController = require("../controllers/appointmentControllers/updateAppointmentController")
const getAllAppointmentsByUserController = require("../controllers/appointmentControllers/getAllAppointmentByUserController");
const getAllAppointmentsByEmployeeController = require("../controllers/appointmentControllers/getAllAppointmentByEmployeeController");
const searchAppointmentContoller = require("../controllers/appointmentControllers/searchAppointmentController");

router.post("/new", auth, createAppointmentController.createAppointment)
router.post("/delete", auth, deleteAppointmentController.deleteAppointment) 
router.get("/visit/:id", auth, getOneAppointmentController.getOneAppointment)
router.put("/update/:id", auth, updateAppointmentController.updateAppointment)
router.get("/all", auth, getAllAppointmentsByUserController.getAllAppointments)
router.get("/list", auth, isEmployee, getAllAppointmentsByEmployeeController.getAllAppointments)
router.post("/sort", auth, searchAppointmentContoller.searchAppointment)


module.exports = router;