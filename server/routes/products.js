/**
 * Express router configuration for product-related routes
 * @module routes/products
 */

const express = require("express");
const router = express.Router();

/**
 * Import product controller for reading operations
 * @const {Function} readProduct - Controller function to handle product retrieval
 */
const readProduct = require("../controllers/products/read");

/**
 * @route   GET /products/read
 * @desc    Retrieve product(s) from the database
 * @access  Public
 */
router.get("/read", readProduct);

module.exports = router;
