var express = require ('express');
const { addUser, modifyUser, getAllUsers, getUserByid, deletUser,} = require('../app/controller/user');
var router = express.Router ()




router.post("/", addUser);
router.put("/:id", modifyUser);
router.get("/", getAllUsers);
router.get("/:id", getUserByid);
router.delete("/delete/:id", deletUser);

module.exports = router;
