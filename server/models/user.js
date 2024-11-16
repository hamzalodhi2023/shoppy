const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: [8, "Password must be at least 8 characters"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      required: true,
      default: "user",
    },
    cnic: {
      type: String,
      unique: true,
      min: 12,
      max: 12,
    },
    mobile: {
      type: String,
      unique: true,
      min: 11,
      max: 11,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    address: {
      type: String,
    },
    zip: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    photo: {
      type: Buffer,
    },
  },
  { timestamps: true, minimize: true }
);

const User = model("user", userSchema);

module.exports = User;
