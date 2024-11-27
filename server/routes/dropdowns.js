/**
 * @fileoverview Routes for handling dropdown-related operations
 * @module routes/dropdowns
 */

// External dependencies
const express = require("express");
const router = express.Router();

// Controller imports for dropdown operations
const createDropdown = require("../controllers/dropdowns/create");
const deleteDropdown = require("../controllers/dropdowns/delete");
const readDropdown = require("../controllers/dropdowns/read");

/**
 * Routes configuration for dropdown management
 * @namespace DropdownRoutes
 */

/**
 * @route POST /create/:id
 * @description Creates a new dropdown with the specified identifier
 * @param {string} id - Unique identifier for the dropdown
 * @access Public
 */
router.post("/create/:id", createDropdown);

/**
 * @route DELETE /delete/:id
 * @description Removes an existing dropdown by its identifier
 * @param {string} id - Unique identifier of the dropdown to delete
 * @access Public
 */
router.delete("/delete/:id", deleteDropdown);

router.get("/read", readDropdown);

// Export the router instance
module.exports = router;
