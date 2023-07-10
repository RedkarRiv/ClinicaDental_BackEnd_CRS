const router = require('express').Router();
const authRoutes = require("./views/authRoutes")
const userRoutes = require("./views/userRoutes");
const appointmentRoutes = require("./views/appointmentRoutes");
const employeeRoutes = require("./views/employeeRoutes");
const cors = require('cors');


router.use(cors());

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/employees", employeeRoutes);
router.use("/appointment", appointmentRoutes);


module.exports = router;