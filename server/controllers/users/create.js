const userModel = require("../../models/user");
const debug = require("debug")("development:controllers:users:create.js");
const validator = require("validator");
const passwordValidate = require("../../utils/bcrypt");

module.exports = async (req, res) => {
  try {
    const { firstname, lastname, email, password, mobile } = req.body;

    if (!firstname || !lastname || !email || !password || !mobile) {
      debug("Please fill in all fields");
      return res.status(404).json({
        success: true,
        message: "Please fill all the required fields.",
      });
    }

    const isEmail = validator.isEmail(email);
    const isStrongPassword = validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    });
    const isMobileNumber = mobile.toString().length === 11;

    if (!isEmail) {
      debug("Invalid email");
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    if (!isStrongPassword) {
      debug("Please enter a strong password.");
      return res
        .status(400)
        .json({ success: false, message: "Please enter a strong password." });
    }

    if (!isMobileNumber) {
      debug("Mobile number length must be 11.");
      return res
        .status(400)
        .json({ success: false, message: "Mobile number length must be 11." });
    }

    const userValidation = await userModel.findOne({ email });

    if (userValidation) {
      debug("This user already exists.");
      return res
        .status(400)
        .json({ success: false, message: "This user already exists." });
    }

    const hashedPassword = await passwordValidate(password);

    const newUser = await userModel.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      mobile,
    });

    debug("User created successfully!");
    return res.status(201).json({
      success: true,
      message: "User created successfully!",
    });
  } catch (error) {
    debug(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
