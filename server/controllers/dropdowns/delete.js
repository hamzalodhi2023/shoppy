/**
 * @module controllers/dropdowns/delete
 * @requires models/dropdown
 * @requires debug
 */

const dropdownModel = require("../../models/dropdown");
const debug = require("debug")("development:controllers:dropdowns:delete.js");

/**
 * Deletes a value from a dropdown's values array
 * @async
 * @param {Object} req - Express request object
 * @param {Object} req.params - Request parameters
 * @param {string} req.params.id - Dropdown ID
 * @param {Object} req.body - Request body
 * @param {string} req.body.value - Value to be deleted from dropdown
 * @param {Object} res - Express response object
 * @returns {Promise<void>} - JSON response with operation status and updated dropdown
 * @throws {Error} - Throws error if operation fails
 */
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { value } = req.body;

    // Find the dropdown by ID
    const dropdown = await dropdownModel.findById(id);

    // Return 404 if dropdown not found
    if (!dropdown) {
      debug("Dropdown not found");
      res.status(404).json({
        success: false,
        message: "Dropdown not found",
      });
    }

    // Remove the specified value from dropdown values array
    dropdown.values.remove(value);

    // Update the dropdown with new values array
    const updatedDropdown = await dropdownModel.findByIdAndUpdate(
      id,
      { values: dropdown.values },
      {
        new: true, // Return the updated document
      }
    );

    debug("Dropdown value deleted successfully");
    res.status(200).json({
      success: true,
      message: "Dropdown deleted successfully.",
      data: updatedDropdown,
    });
  } catch (error) {
    // Log and return any errors that occur
    debug(error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
