const router = require("express").Router();
const auth = require("../middlewares/tokenVerify");
const isAdmin = require("../middlewares/isAdmin");
const createAppointmentController = require("../controllers/createAppointmentController");
const deleteAppointmentController = require("../controllers/deleteAppointmentController");
const getOneAppointmentController = require("../controllers/getOneAppointmentController");
const updateAppointmentController = require("../controllers/updateAppointmentController")

router.post("/new", auth, createAppointmentController.createAppointment)
router.delete("/:id", auth, deleteAppointmentController.deleteAppointment)
router.get("/:id", auth, getOneAppointmentController.getOneAppointment)
router.put("/update/:id", auth, updateAppointmentController.updateAppointment)


module.exports = router;