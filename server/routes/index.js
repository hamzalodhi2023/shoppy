/**
 * Express router module for handling main application routes
 * @module routes/index
 */

const express = require("express");
const router = express.Router();

/**
 * GET request handler for the home page
 * @route GET /
 * @description Responds with a simple "Hello World" message
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {function} next - Express next middleware function
 * @returns {void}
 */
router.get("/", function (req, res, next) {
  res.send("Hello World");
});

/**
 * Export the router instance for use in the main application
 * @exports router
 */
module.exports = router;
