const router = require("express").Router();
const isAdmin = require("../middlewares/isAdmin");

const authController = require('../controllers/authControllers/authController')

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/newEmployee', isAdmin, authController.createEmployee);

module.exports = router;