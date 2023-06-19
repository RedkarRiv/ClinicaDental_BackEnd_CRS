const router = require("express").Router();
const isAdmin = require("../middlewares/isAdmin");
const auth = require("../middlewares/tokenVerify")

const authController = require('../controllers/authControllers/authController')

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/newEmployee', auth, isAdmin, authController.createEmployee); // ACTUALIZAR TB LA TABBLA USER.

module.exports = router;