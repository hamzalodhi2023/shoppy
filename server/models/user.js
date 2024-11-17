// Import required modules from mongoose
const { Schema, model } = require("mongoose");

// Define the user schema with validation and configuration
const userSchema = new Schema(
  {
    // User's first name - Required field
    firstName: {
      type: String,
      required: true,
    },
    // User's last name - Required field
    lastName: {
      type: String,
      required: true,
    },
    // User's email - Required, must be unique
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    // User's password - Required, minimum 8 characters
    password: {
      type: String,
      required: true,
      min: [8, "Password must be at least 8 characters"],
    },
    // User's role - Either admin or user, defaults to user
    role: {
      type: String,
      enum: ["admin", "user"],
      required: true,
      default: "user",
    },
    // User's CNIC (National ID) - Must be unique and exactly 12 characters
    cnic: {
      type: String,
      unique: true,
      min: 12,
      max: 12,
    },
    // User's mobile number - Must be unique and exactly 11 characters
    mobile: {
      type: String,
      unique: true,
      min: 11,
      max: 11,
    },
    // User's state/province information
    state: {
      type: String,
    },
    // User's city information
    city: {
      type: String,
    },
    // User's street address
    address: {
      type: String,
    },
    // User's postal/ZIP code
    zip: {
      type: String,
    },
    // User's gender - Either male or female
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    // User's profile photo stored as binary data
    photo: {
      type: Buffer,
    },
  },
  // Schema options: Enable timestamps and minimize empty objects
  { timestamps: true, minimize: true }
);

// Create and export the user model
const userModel = model("user", userSchema);
module.exports = userModel;
