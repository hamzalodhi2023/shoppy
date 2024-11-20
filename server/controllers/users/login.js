/**
 * User login controller module
 * @module controllers/users/login
 */

const userModel = require("../../models/user");
const debug = require("debug")("development:controllers:users:login.js");
const comparePassword = require("../../utils/comparePassword");
const createJWT = require("../../utils/createJWT");

/**
 * Handles user login authentication
 * @async
 * @param {Object} req - Express request object
 * @param {Object} req.body - Request body containing login credentials
 * @param {string} req.body.email - User's email address
 * @param {string} req.body.password - User's password
 * @param {Object} res - Express response object
 * @returns {Object} JSON response with authentication status and token
 * @throws {Error} When database operation fails
 */
module.exports = async (req, res) => {
  try {
    // Extract credentials from request body
    const { email, password } = req.body;

    // Validate if all required fields are provided
    if (!email || !password) {
      debug("Please provide all credentials.");
      return res
        .status(400)
        .json({ message: "Please provide all credentials." });
    }

    // Find user by email in database
    const user = await userModel.findOne({ email });
    debug(user);

    // Check if user exists
    if (!user) {
      debug("User not found");
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    // Verify password against stored hash
    const isValidPassword = await comparePassword(password, user.password);
    debug(isValidPassword);

    // Handle invalid password
    if (!isValidPassword) {
      debug("Password is invalid.");
      return res
        .status(400)
        .json({ success: false, message: "Password is invalid" });
    }

    // Generate JWT token for authenticated user
    const token = await createJWT(user._id);

    // Send successful response with token
    debug("You are logged in successfully!");
    return res.status(200).json({
      success: true,
      message: "You are logged in successfully!",
      token: token,
    });
  } catch (error) {
    // Handle unexpected errors
    debug(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
