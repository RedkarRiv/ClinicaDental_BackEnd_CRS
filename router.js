const router = require('express').Router();
const authRoutes = require("./views/authRoutes")
const userRoutes = require("./views/userRoutes");

router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;