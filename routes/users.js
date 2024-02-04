var express = require ('express');
const { addUser, modifyUser, getAllUsers,} = require('../app/controller/user');
var router = express.Router ()




router.post("/", addUser);
router.put("/:id", modifyUser);
router.get("/", getAllUsers);

module.exports = router;
