const router = require("express").Router();
const auth = require("../middlewares/tokenVerify");
const isAdmin = require("../middlewares/isAdmin");
const createAppointmentController = require("../controllers/createAppointmentController");
const deleteAppointmentController = require("../controllers/deleteAppointmentController");
const getOneAppointmentController = require("../controllers/getOneAppointmentController");

router.post("/new", auth, createAppointmentController.createAppointment)
router.delete("/:id", auth, deleteAppointmentController.deleteAppointment)
router.get("/:id", auth, getOneAppointmentController.getOneAppointment)

module.exports = router;