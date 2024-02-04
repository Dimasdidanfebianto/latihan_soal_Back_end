var express = require ('express');
const { addUser } = require('../app/controller/user');
var router = express.Router ()




router.post("", addUser);

module.exports = router;
