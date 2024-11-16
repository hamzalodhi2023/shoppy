/**
 * Express router module for user-related routes
 * @module routes/users
 */

const express = require("express");
const router = express.Router();

// Import user controller functions
const createUser = require("../controllers/users/create");

/**
 * POST /users/create
 * @description Creates a new user
 * @access Public
 */
router.post("/create", createUser);

// Export the router for use in the main application
module.exports = router;
