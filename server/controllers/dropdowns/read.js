/**
 * @module controllers/dropdowns/read
 * @requires models/dropdown
 * @requires debug
 */

const dropdownModel = require("../../models/dropdown");
const debug = require("debug")("development:controllers:dropdowns:read.js");

/**
 * Retrieves dropdown values based on the provided name
 * @async
 * @param {Object} req - Express request object
 * @param {Object} req.query - Query parameters
 * @param {string} req.query.name - Name of the dropdown to retrieve
 * @param {Object} res - Express response object
 * @returns {Promise<Object>} JSON response containing success status and dropdown values
 * @throws {Error} When database operation fails
 */
module.exports = async (req, res) => {
  try {
    const { name } = req.query;
    const dropdown = await dropdownModel.findOne({ name: name });

    // Return 404 if dropdown is not found
    if (!dropdown) {
      debug("Dropdowns not found");
      return res.status(404).json({
        success: false,
        message: "Dropdowns not found",
      });
    }

    // Return dropdown values if found
    debug("Dropdowns found");
    return res.status(200).json({
      success: true,
      dropdowns: dropdown.values,
    });
  } catch (error) {
    // Handle any unexpected errors
    debug("Error reading dropdowns: %o", error);
    return res.status(500).json({
      success: false,
      message: "Error reading dropdowns",
    });
  }
};
