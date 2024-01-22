var express = require ('express')
var router = express.Router ()

const { createUser} = require ('../app/services/user.js');


router.post('/', createUser);

module.exports = router;
