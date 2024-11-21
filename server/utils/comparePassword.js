/**
 * Compares a plain text password with a hashed password using bcrypt
 * @param {string} password - The plain text password to compare
 * @param {string} hash - The hashed password to compare against
 * @returns {Promise<boolean>} Returns true if passwords match, false otherwise
 * @throws {Error} Throws an error if comparison fails
 */
const bcrypt = require("bcryptjs");

module.exports = async (password, hash) => {
  try {
    // Compare the provided password with stored hash using bcrypt
    return await bcrypt.compare(password, hash);
  } catch (error) {
    // If comparison fails, throw a generic error to avoid exposing sensitive details
    throw new Error("Error comparing password");
  }
};
