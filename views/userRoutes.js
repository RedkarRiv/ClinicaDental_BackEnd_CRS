const router = require("express").Router();
const auth = require("../middlewares/tokenVerify");
const deleteUserController = require("../controllers/deleteUserController");
const updateUserController = require("../controllers/updateUserController");
const isAdmin = require("../middlewares/isAdmin");
const getOneUserController = require("../controllers/getOneUserController");

router.delete("/:id", auth, isAdmin, deleteUserController.deleteUser);
router.put("/update", auth, updateUserController.updateUser);
router.get("/", auth, getOneUserController.getOneUser);


module.exports = router;