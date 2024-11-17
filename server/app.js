// Load environment variables from .env file
require("dotenv").config();

// Import required dependencies
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

// Initialize database connection
require("./config/db")();

// Import route handlers
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// Create Express application instance
var app = express();

// Configure middleware
app.use(
  cors({
    origin: ["http://localhost:5173"], // Allow requests from this origin
    credentials: true, // Allow sending cookies with requests
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
  })
); // Enable Cross-Origin Resource Sharing (CORS)
app.use(logger("dev")); // Enable request logging for development
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded request bodies
app.use(cookieParser()); // Parse cookies
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from 'public' directory

// Register route handlers
app.use("/", indexRouter); // Mount index routes at root path
app.use("/users", usersRouter); // Mount user routes at /users path

// Export Express application for use in other modules
module.exports = app;
