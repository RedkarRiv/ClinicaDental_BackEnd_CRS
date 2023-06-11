const router = require("express").Router();
const auth = require("../middlewares/tokenVerify");
const isAdmin = require("../middlewares/isAdmin");
const createAppointmentController = require("../controllers/createAppointmentController");


router.post("/new", auth, createAppointmentController.createAppointment)


module.exports = router;