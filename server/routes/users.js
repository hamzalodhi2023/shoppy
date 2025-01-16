/**
 * @fileoverview Express router module for handling user-related routes and operations.
 * This module defines the routing logic for user management endpoints.
 * @module routes/users
 * @requires express
 * @requires ../controllers/users/create
 */

const express = require("express");
const router = express.Router();

/**
 * Import user controller functions
 * @const {Function} createUser - Controller function for user creation
 */
const createUser = require("../controllers/users/create");
const loginUser = require("../controllers/users/login");
const googleLoginAuthentication =
  require("../controllers/users/google-login").authentication;
const googleLoginCallback =
  require("../controllers/users/google-login").callback;

/**
 * Route to create a new user
 * @name POST /users/create
 * @function
 * @memberof module:routes/users
 * @param {Object} req - Express request object
 * @param {Object} req.body - Request body containing user data
 * @param {Object} res - Express response object
 * @returns {Promise<void>} - Resolves when user creation is complete
 */
router.post("/create", createUser);
router.post("/login", loginUser);
router.get("/social-login/auth/google", googleLoginAuthentication);
router.get("/social-login/auth/google/callback", googleLoginCallback);

/**
 * Export the router instance
 * @exports router
 */
module.exports = router;
