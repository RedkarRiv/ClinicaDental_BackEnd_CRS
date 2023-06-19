const router = require("express").Router();
const auth = require("../middlewares/tokenVerify");
const isAdmin = require("../middlewares/isAdmin");
const deleteEmployeeController = require("../controllers/employeeControllers/deleteEmployeeController");


router.delete("/delete/:id", auth, isAdmin, deleteEmployeeController.deleteEmployee); //PTE ELIMINAR CAMPOS DE USER.



module.exports = router;