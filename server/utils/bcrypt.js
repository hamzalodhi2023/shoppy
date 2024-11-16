/**
 * Hashes a password using bcrypt encryption
 * @param {string} password - The plain text password to hash
 * @returns {Promise<string>} A promise that resolves to the hashed password
 * @throws {Error} If password hashing fails
 */
const bcrypt = require("bcryptjs");

module.exports = (password) => {
  try {
    // Number of salt rounds for bcrypt (higher = more secure but slower)
    const saltRounds = 10;
    // Generate hash using bcrypt with specified salt rounds
    const hashedPassword = bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error("Error while creating user.");
  }
};
