/**
 * @module controllers/dropdowns/create
 * @description Controller responsible for adding new values to existing dropdown menus in the system.
 * This module handles the validation, existence checks, and database operations required for
 * safely extending dropdown options.
 * @requires models/dropdown - MongoDB model for dropdown operations
 * @requires debug - Debug logging utility for development environment
 */

const dropdownModel = require("../../models/dropdown");
const debug = require("debug")("development:controllers:dropdowns:create.js");

/**
 * @async
 * @function
 * @description Handles the addition of new values to an existing dropdown menu.
 * Performs comprehensive validation including:
 * - Required field validation (id and value)
 * - Existence check for the target dropdown
 * - Duplicate value prevention
 *
 * @param {Object} req - Express request object
 * @param {Object} req.params - URL parameters
 * @param {string} req.params.id - MongoDB ObjectId of the target dropdown
 * @param {Object} req.body - Request payload
 * @param {string} req.body.value - New value to be added to the dropdown
 *
 * @param {Object} res - Express response object
 *
 * @returns {Object} JSON response containing:
 * - success: Boolean indicating operation success
 * - message: Descriptive message about the operation result
 * - data: Updated dropdown document (only on success)
 *
 * @throws {Error} Database operation failures or validation errors
 */
module.exports = async (req, res) => {
  try {
    // Extract dropdown identifier from request parameters
    const { id } = req.params;

    // Extract new value from request payload
    const { value } = req.body;

    // Validate presence of required dropdown identifier
    if (!id) {
      debug("Operation failed: Missing dropdown identifier");
      return res
        .status(404)
        .json({ success: false, message: "Please provide dropdown id." });
    }

    // Validate presence of new value to be added
    if (!value) {
      debug("Operation failed: Missing dropdown value");
      return res
        .status(404)
        .json({ success: false, message: "Please provide a dropdown value." });
    }

    // Verify dropdown existence in database
    const dropdown = await dropdownModel.findById(id);

    // Handle case where target dropdown doesn't exist
    if (!dropdown) {
      debug("Operation failed: Target dropdown not found in database");
      return res.status(404).json({
        success: false,
        message: "Dropdown not found.",
      });
    }

    // Check for duplicate values to maintain data integrity
    const valueAlreadyExists = dropdown.values.includes(value);

    // Prevent duplicate value insertion
    if (valueAlreadyExists) {
      debug("Operation failed: Attempted to add duplicate value");
      return res.status(400).json({
        success: false,
        message: "This dropdown value already exists.",
      });
    }

    // Create new values array with immutable spread operator
    const newValues = [...dropdown.values, value];

    // Persist updated values to database and retrieve updated document
    const updatedDropdown = await dropdownModel.findByIdAndUpdate(
      id,
      { values: newValues },
      { new: true }
    );

    // Log successful operation and return updated data
    debug("Operation successful: New dropdown value added");
    return res.status(201).json({
      success: true,
      message: "Dropdown value created successfully.",
      data: updatedDropdown,
    });
  } catch (error) {
    // Log error details for debugging and return sanitized error response
    debug("Operation failed: Database error occurred:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
