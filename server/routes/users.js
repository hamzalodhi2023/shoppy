var express = require("express");
var router = express.Router();
const createUser = require("../controllers/users/create");

router.post("/create", createUser);

module.exports = router;
