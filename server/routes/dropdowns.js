const express = require("express");
const router = express.Router();

const createDropdown = require("../controllers/dropdowns/create");
const deleteDropdown = require("../controllers/dropdowns/delete");

router.post("/create/:id", createDropdown);
router.delete("/delete/:id", deleteDropdown);
module.exports = router;
