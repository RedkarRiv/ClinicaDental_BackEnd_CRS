const router = require("express").Router();
const auth = require("../middlewares/tokenVerify");
const deleteUserController = require("../controllers/deleteUserController");
const isAdmin = require("../middlewares/isAdmin");

router.delete("/:id", auth, isAdmin, deleteUserController.deleteUser);


module.exports = router;