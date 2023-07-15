const router = require("express").Router();
const authController = require('../controllers/authControllers/authController');



router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/getlogin', authController.getlogin);

module.exports = router;