// Load environment variables from .env file
require("dotenv").config();

// Import required dependencies
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var session = require("express-session");
const passport = require("passport");
const GoogleLoginMiddleware = require("./middlewares/google-login-strategy");

// Initialize database connection
require("./config/db")();

// Import route handlers
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const dropdownRouter = require("./routes/dropdowns");
const productRouter = require("./routes/products");

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
// Configure session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Secret key for session encryption
    resave: false, // Do not save session if unmodified
    saveUninitialized: true, // Save new sessions, even if empty
  })
);
// Initialize Passport.js for authentication
app.use(passport.initialize());
app.use(passport.session());

// Configure Passport to use Google OAuth2 strategy
passport.use("google", GoogleLoginMiddleware);

// Configure Passport to serialize and deserialize user objects
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Register route handlers
app.use("/", indexRouter); // Mount index routes at root path
app.use("/users", usersRouter); // Mount user routes at /users path
app.use("/dropdowns", dropdownRouter); // Mount dropdown routes at /dropdowns path
app.use("/products", productRouter); // Mount product routes at /products path

// Export Express application for use in other modules
module.exports = app;
