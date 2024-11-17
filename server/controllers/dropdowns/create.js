/**
 * @module controllers/dropdowns/create
 * @description Controller for adding values to an existing dropdown
 * @requires models/dropdown
 * @requires debug
 */

const dropdownModel = require("../../models/dropdown");
const debug = require("debug")("development:controllers:dropdowns:create.js");

/**
 * @async
 * @function
 * @description Adds new values to an existing dropdown
 * @param {Object} req - Express request object
 * @param {Object} req.body - Request body containing dropdown data
 * @param {string} req.body.name - Name of the dropdown to update
 * @param {Array} req.body.values - Array of values to add to the dropdown
 * @param {Object} res - Express response object
 * @returns {Object} JSON response with operation status and updated dropdown data
 * @throws {Error} When database operation fails
 */
module.exports = async (req, res) => {
  try {
    // Extract id from request parameters
    const { id } = req.params;

    // Extract required fields from request body
    const { values } = req.body;

    // Check if dropdown exists in database
    const dropdown = await dropdownModel.findById(id);

    // Return error if dropdown not found
    if (!dropdown) {
      debug("dropdown not found");
      return res.status(404).json({
        success: false,
        message: "Dropdown not found.",
      });
    }

    // Merge existing values with new values
    const newValues = [...dropdown.values, ...values];

    // Update dropdown with new values and return updated document
    const updatedDropdown = await dropdownModel.findByIdAndUpdate(
      id,
      { values: newValues },
      { new: true }
    );
    debug("dropdown updated successfully");
    return res.status(201).json({
      success: true,
      message: "Dropdown updated successfully.",
      data: updatedDropdown,
    });
  } catch (error) {
    // Log and return any errors that occur during execution
    debug("error updating dropdown:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
