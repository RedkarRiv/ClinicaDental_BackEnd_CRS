const router = require("express").Router();
const authController = require('../controllers/authControllers/authController')

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/newEmployee', authController.createEmployee);

module.exports = router;