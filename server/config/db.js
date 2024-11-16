// Import required modules
const mongoose = require("mongoose");
const debug = require("debug")("development:config:mongodb-connection");

// Create a debug instance for logging
/**
 * Establishes a connection to the MongoDB database
 * @async
 * @function connectDB
 * @throws {Error} If connection fails
 */
const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database
    await mongoose.connect(process.env.MONGODB_URI);
    // Log successful connection
    debug("Database connection established!");
  } catch (error) {
    // Log error message if connection fails
    debug("Error connecting to database:", error.message);
    // Rethrow the error for handling by the caller
    throw error;
  }
};

// Export the connectDB function
module.exports = connectDB;
