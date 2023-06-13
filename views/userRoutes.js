const router = require("express").Router();
const auth = require("../middlewares/tokenVerify");
const isAdmin = require("../middlewares/isAdmin");
const isEmployee = require("../middlewares/isEmployee");
const deleteUserController = require("../controllers/usersControllers/deleteUserController");
const updateUserController = require("../controllers/usersControllers/updateUserController");
const getOneUserController = require("../controllers/usersControllers/getOneUserController");
const getAllUserController = require("../controllers/usersControllers/getAllUserController");
const getAllUsersByEmployeeController = require("../controllers/usersControllers/getAllUsersByEmployeeController")


router.delete("/:id", auth, isAdmin, deleteUserController.deleteUser);
router.put("/update", auth, updateUserController.updateUser);
router.get("/", auth, getOneUserController.getOneUser);
router.get("/all", auth, isAdmin, getAllUserController.getAllUsers);
router.get("/patients/", auth, isEmployee, getAllUsersByEmployeeController.getAllPatients); // Sacar employee_ID by token por user_id


module.exports = router;