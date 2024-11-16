/**
 * @fileoverview MongoDB database connection configuration module.
 * @module config/db
 * @requires mongoose
 * @requires debug
 */

// Import external dependencies
const mongoose = require("mongoose");
const debug = require("debug")("development:config:mongodb-connection");

/**

 * Establishes a connection to the MongoDB database using the provided URI from environment variables.
 * Implements mongoose's connection method with default configuration options.
 * 
 * @async
 * @function connectDB

 * @throws {Error} Throws an error if the database connection fails
 * @returns {Promise<void>} Resolves when connection is successful
 * 
 * @example
 * try {
 *   await connectDB();
 *   // Database connection successful
 * } catch (error) {
 *   // Handle connection error
 * }
 */
const connectDB = async () => {
  try {
    // Attempt to establish MongoDB connection using environment variable URI
    await mongoose.connect(process.env.MONGODB_URI);

    // Log successful connection status for debugging purposes
    debug("Database connection established!");
  } catch (error) {
    // Log detailed error information for debugging and monitoring
    debug("Error connecting to database:", error.message);

    // Propagate error to calling function for proper error handling
    throw error;
  }
};

// Export the connection function for use in other modules
module.exports = connectDB;
