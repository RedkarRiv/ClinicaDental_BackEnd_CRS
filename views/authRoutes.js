const router = require("express").Router();

const authController = require('../controllers/authControllers/authController')
const cors = require('cors');


router.use(cors());

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;