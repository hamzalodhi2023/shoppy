/**
 * User creation controller
 * @module controllers/users/create
 */

const userModel = require("../../models/user");
const debug = require("debug")("development:controllers:users:create.js");
const validator = require("validator");
const passwordValidate = require("../../utils/bcrypt");

/**
 * Creates a new user in the system
 * @async
 * @param {Object} req - Express request object
 * @param {Object} req.body - Request body containing user details
 * @param {string} req.body.firstName - User's first name
 * @param {string} req.body.lastName - User's last name
 * @param {string} req.body.email - User's email address
 * @param {string} req.body.password - User's password
 * @param {number} req.body.mobile - User's mobile number
 * @param {Object} res - Express response object
 * @returns {Object} JSON response with success status and message
 * @throws {Error} When server encounters an error during user creation
 */
module.exports = async (req, res) => {
  try {
    // Extract user details from request body
    const { firstName, lastName, email, password, mobile } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !password || !mobile) {
      debug("Please fill in all fields");
      return res.status(404).json({
        success: true,
        message: "Please fill all the required fields.",
      });
    }

    // Validate email, password strength, and mobile number format
    const isEmail = validator.isEmail(email);
    const isStrongPassword = validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    });
    const isMobileNumber = mobile.toString().length === 11;

    // Check email validity
    if (!isEmail) {
      debug("Invalid email");
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    // Ensure password meets strength requirements
    if (!isStrongPassword) {
      debug("Please enter a strong password.");
      return res
        .status(400)
        .json({ success: false, message: "Please enter a strong password." });
    }

    // Validate mobile number length
    if (!isMobileNumber) {
      debug("Mobile number length must be 11.");
      return res
        .status(400)
        .json({ success: false, message: "Mobile number length must be 11." });
    }

    // Check if user already exists in database
    const userValidation = await userModel.findOne({ email });

    if (userValidation) {
      debug("This user already exists.");
      return res
        .status(400)
        .json({ success: false, message: "This user already exists." });
    }

    // Hash the password before storing
    const hashedPassword = await passwordValidate(password);

    // Create new user in database
    const newUser = await userModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      mobile,
    });

    // Return success response
    debug("User created successfully!");
    return res.status(201).json({
      success: true,
      message: "User created successfully!",
    });
  } catch (error) {
    // Handle any server errors
    debug(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
