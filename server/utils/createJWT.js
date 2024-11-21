/**
 * JWT token generation utility
 * This module provides functionality to create JSON Web Tokens for user authentication.
 * The tokens are signed using a secret key stored in environment variables.
 *
 * @module createJWT
 * @requires jsonwebtoken
 * @version 1.0.0
 * @since 1.0.0
 */
const jwt = require("jsonwebtoken");

/**
 * Creates a JSON Web Token for user authentication
 * This function generates a secure JWT token by signing the user ID with a secret key.
 * The token can be used for subsequent authenticated requests.
 *
 * @param {string|number} id - The unique identifier of the user to be encoded in the token
 * @returns {string} The generated JWT token string
 * @throws {Error} If token generation fails due to invalid inputs or configuration issues
 *
 * @example
 * try {
 *   const token = createJWT('user123');
 *   // Use token for authentication
 * } catch (error) {
 *   console.error('Token generation failed:', error);
 * }
 */
module.exports = (id) => {
  try {
    // Sign the token with user ID and secret key
    return jwt.sign({ id }, process.env.JWT_SECRET);
  } catch (error) {
    // Throw a more descriptive error for better debugging
    throw new Error("Error generating JWT: Token signing failed");
  }
};
