const express = require("express");
const router = express.Router();

const createDropdown = require("../controllers/dropdowns/create");

router.post("/create", createDropdown);
module.exports = router;
