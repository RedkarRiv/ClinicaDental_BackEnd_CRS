const router = require("express").Router();
const auth = require("../middlewares/tokenVerify");
const isAdmin = require("../middlewares/isAdmin");
const deleteUserController = require("../controllers/deleteUserController");
const updateUserController = require("../controllers/updateUserController");
const getOneUserController = require("../controllers/getOneUserController");

router.delete("/:id", auth, isAdmin, deleteUserController.deleteUser);
router.put("/update", auth, updateUserController.updateUser);
router.get("/", auth, getOneUserController.getOneUser);


module.exports = router;